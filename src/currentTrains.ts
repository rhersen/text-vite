import _ from "lodash";
import * as wgs from "./wgs";
import TrainAnnouncement from "./TrainAnnouncement";
import Locations from "./Locations";

export type Actual = {
  latest: TrainAnnouncement | undefined;
  latestDeparture: TrainAnnouncement | undefined;
};

export default function currentTrains(
  locations: Locations,
  announcement: TrainAnnouncement[]
): Actual[] {
  const grouped = _.groupBy(announcement, "AdvertisedTrainIdent");
  const includingUndefineds: Actual[] = _.map(grouped, selectLatest);
  const noUndefineds: Actual[] = _.filter(includingUndefineds, "latest");
  const sorted = sortTrains(noUndefineds, direction(announcement));
  return _.filter(_.reject(sorted, hasArrivedAtDestination), isPendel);

  function selectLatest(trainAnnouncements: TrainAnnouncement[]): Actual {
    return {
      latest: getLatest(trainAnnouncements),
      latestDeparture: getLatest(
        _.filter(trainAnnouncements, { ActivityType: "Avgang" })
      ),
    };
  }

  function getLatest(
    trainAnnouncements: TrainAnnouncement[]
  ): TrainAnnouncement | undefined {
    return getTrainAnnouncement(
      _.maxBy(trainAnnouncements, "TimeAtLocationWithSeconds"),
      trainAnnouncements
    );
  }

  function getTrainAnnouncement(
    trainAnnouncement: TrainAnnouncement | undefined,
    trainAnnouncements: TrainAnnouncement[]
  ) {
    return !trainAnnouncement
      ? undefined
      : !trainAnnouncement.ToLocation
      ? addToLocation(trainAnnouncements, trainAnnouncement)
      : trainAnnouncement;
  }

  function addToLocation(
    trainAnnouncements: TrainAnnouncement[],
    trainAnnouncement: TrainAnnouncement
  ): TrainAnnouncement | undefined {
    const found: TrainAnnouncement | undefined = _.find(
      trainAnnouncements,
      "ProductInformation"
    );
    return found
      ? {
          ...trainAnnouncement,
          ProductInformation: found.ProductInformation,
          ToLocation: found.ToLocation,
        }
      : trainAnnouncement;
  }

  function direction(announcements: TrainAnnouncement[]): boolean {
    return (
      announcements.length > 0 &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    );
  }

  function hasArrivedAtDestination({ latest }: Actual): boolean {
    if (!latest) return false;
    if (latest.LocationSignature === "Söd") return true;
    if (latest.LocationSignature === "Skby") return true;
    if (latest.ActivityType !== "Ankomst") return false;
    return (
      _.map(latest.ToLocation, "LocationName").join() ===
      latest.LocationSignature
    );
  }

  function isPendel(train: Actual): boolean {
    if (!train.latest) return false;
    return train.latest.ToLocation && train.latest.ToLocation.length > 0;
  }

  function sortTrains(obj: Actual[], dir: boolean): Actual[] {
    return _.orderBy(
      obj,
      [
        (a) => north(a.latest ? a.latest.LocationSignature : ""),
        "latest.ActivityType",
        "latest.TimeAtLocation",
      ],
      ["desc", dir ? "asc" : "desc", dir ? "desc" : "asc"]
    );
  }

  function north(location: string): number {
    if (location === "Gdv") return between("Ngd", "Nyh");
    if (location === "Söc") return between("Söd", "Söu");
    if (location === "Gn") return between("Mö", "Ssä");
    return wgs.north(location, locations);
  }

  function between(loc1: string, loc2: string): number {
    return 0.5 * wgs.north(loc1, locations) + 0.5 * wgs.north(loc2, locations);
  }
}
