import _ from "lodash";
import { differenceInSeconds, parseISO } from "date-fns";
import { Actual } from "./currentTrains";
import TrainAnnouncement from "./TrainAnnouncement";
import Locations from "./Locations";

export function line1(train: Actual, locations: Locations) {
  const a = train.latest;

  if (!a) return "Aktuell information saknas";

  return `${id(a)} mot ${_.map(_.map(a.ToLocation, "LocationName"), (loc) =>
    stationName(loc, locations)
  )} ${precision(a)}`;
}

export function line2(train: Actual, locations: Locations) {
  const a = train.latest;

  if (!a) return "line2";

  return `${activity(a)} ${location(
    a
  )} kl ${a.TimeAtLocationWithSeconds.substring(11, 19)}`;

  function location(announcement: TrainAnnouncement) {
    return stationName(announcement.LocationSignature, locations);
  }
}

function id(a: TrainAnnouncement) {
  return a.AdvertisedTrainIdent;
}

function stationName(locationSignature: string, locations: Locations) {
  return locations[locationSignature]
    ? locations[locationSignature].AdvertisedShortLocationName
    : locationSignature;
}

function precision(a: TrainAnnouncement) {
  const delay = differenceInSeconds(
    parseISO(a.TimeAtLocationWithSeconds),
    parseISO(a.AdvertisedTimeAtLocation)
  );

  if (delay > 120) return `${Math.trunc(delay / 60)} minuter sent`;
  if (delay > 30) return `${delay}s sent`;
  if (delay < -60) return "i god tid";
  return "i tid";
}

function activity(a: TrainAnnouncement) {
  return a.ActivityType === "Ankomst" ? "ank" : "avg";
}
