export default interface TrainAnnouncement {
  ActivityType: string;
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  EstimatedTimeAtLocation: string;
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
