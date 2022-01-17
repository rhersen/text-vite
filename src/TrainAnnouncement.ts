export default interface TrainAnnouncement {
  ActivityType: string;
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  LocationSignature: string;
  ProductInformation: Description[];
  TimeAtLocation: string;
  TimeAtLocationWithSeconds: string;
  ToLocation: Location[];
}

interface Location {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface Description {
  Code: string;
  Description: string;
}

export function key(announcement: TrainAnnouncement) {
  return (
    announcement.ActivityType.substr(1, 1) +
    announcement.AdvertisedTrainIdent +
    announcement.LocationSignature
  );
}
