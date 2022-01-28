export default interface TrainAnnouncement {
  AdvertisedTimeAtLocation: string;
  Canceled: boolean;
  LocationSignature: string;
  ProductInformation: Description[];
  TimeAtLocation: string;
}

export interface Description {
  Code: string;
  Description: string;
}
