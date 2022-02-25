import { addMinutes, parseISO, subMinutes } from "date-fns";
import _ from "lodash";
import TrainAnnouncement, { Description } from "./TrainAnnouncement";

export default (announcements: TrainAnnouncement[], now: Date) => {
  const lowerBound = subMinutes(now, 60);
  const upperBound = addMinutes(now, 45);
  return _.difference(
    ids(announcements),
    ids(_.filter(announcements, isTooEarly)),
    ids(_.filter(announcements, isTooLate)),
    ids(_.reject(announcements, isPendel))
  ).sort(byAdvertisedTime);

  function isTooEarly(a: TrainAnnouncement) {
    return estimatedTime(a) < lowerBound;
  }

  function isTooLate(a: TrainAnnouncement) {
    return estimatedTime(a) > upperBound;
  }

  function isPendel(a: TrainAnnouncement) {
    return _.some(
      _.filter(announcements, {
        AdvertisedTrainIdent: a.AdvertisedTrainIdent
      }),
      announcement =>
        _.some(
          announcement.ProductInformation,
          (prod: Description): boolean => prod.Description === "SL Pendeltåg"
        )
    );
  }

  function byAdvertisedTime(leftId: string, rightId: string): 0 | 1 | -1 {
    const left = _.filter(announcements, { AdvertisedTrainIdent: leftId });

    for (let i = 0; i < left.length; i++) {
      const right = _.find(announcements, {
        AdvertisedTrainIdent: rightId,
        LocationSignature: left[i].LocationSignature,
        ActivityType: left[i].ActivityType
      });

      if (right) return compareTimes(left[i], right);
    }

    return -1;
  }
};

function ids(announcements: TrainAnnouncement[]) {
  return _.uniq(_.map(announcements, "AdvertisedTrainIdent"));
}

function estimatedTime(a: TrainAnnouncement): Date {
  return parseISO(a.AdvertisedTimeAtLocation);
}

function compareTimes(
  a1: TrainAnnouncement,
  a2: TrainAnnouncement
): 0 | 1 | -1 {
  const time1 = a1.AdvertisedTimeAtLocation;
  const time2 = a2.AdvertisedTimeAtLocation;
  if (time1 < time2) return -1;
  if (time1 > time2) return 1;
  return 0;
}
