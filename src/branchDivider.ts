import * as wgs from "./wgs";
import { Actual } from "./currentTrains";
import Locations from "./Locations";

export default (locations: Locations) =>
  (train: Actual): string => {
    if (!train.latest) return "";
    const location = train.latest.LocationSignature;
    const north = wgs.north(location, locations);
    if (!north) return "";

    return north > 59.354 ? n() : s();

    function n() {
      if (north > 59.64) return "ne";
      if (north > 59.407) return `n${leftRight(17.84)}`;
      return `n${leftRight(18.001)}`;
    }

    function s() {
      if (north < 59.17) return `s${leftRight(17.84)}`;
      if (north < 59.27) return `s${leftRight(18)}`;
      return "c";
    }

    function leftRight(limit: number) {
      const east = wgs.east(location, locations);
      if (!east) return "";
      return east < limit ? "w" : "e";
    }
  };
