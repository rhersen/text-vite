export default interface Locations {
  [key: string]: {
    AdvertisedShortLocationName: string;
    Geometry: {
      SWEREF99TM: string;
      WGS84: string;
    };
  };
}
