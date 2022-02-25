export default interface TrainAnnouncement {
  ActivityId: string;
  ActivityType: string;
  Advertised: boolean;
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  Canceled: boolean;
  Deviation: Description[];
  EstimatedTimeAtLocation: string;
  EstimatedTimeIsPreliminary: boolean;
  FromLocation: Location[];
  InformationOwner: string;
  LocationSignature: string;
  ModifiedTime: string;
  NewEquipment: number;
  OtherInformation: Description[];
  ProductInformation: Description[];
  ScheduledDepartureDateTime: string;
  TechnicalTrainIdent: string;
  TimeAtLocation: string;
  TimeAtLocationWithSeconds: string;
  ToLocation: Location[];
  TrackAtLocation: string;
  TypeOfTraffic: Description;
  ViaToLocation: Location[];
  WebLink: string;
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
