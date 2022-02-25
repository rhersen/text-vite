import _ from "lodash";
import TrainAnnouncement from "./TrainAnnouncement";

export default (
  announcements: TrainAnnouncement[]
): { [key: string]: TrainAnnouncement } =>
  _.keyBy(
    announcements,
    a => `${a.LocationSignature}${a.AdvertisedTrainIdent}${a.ActivityType}`
  );
