import * as wgs from "./wgs";
import { Actual } from "./currentTrains";
import Locations from "./Locations";

export default (locations: Locations) =>
  (train: Actual): string => {
    if (!train.latest) return "";
    const location = train.latest.LocationSignature;
    const east = wgs.east(location, locations);
    const north = wgs.north(location, locations);
    if (!north) return "";

    if (north < 59) return "se";
    if (north > 59.5) {
      if (east > 17) return "ne";
      else return "nw";
    }
    if (east < 17.6) return "sw";
    return "c";
  };
