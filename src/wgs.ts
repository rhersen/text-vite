import Locations from "./Locations";

export function east(location: string, locations: Locations): number {
  const match = /POINT \(([\d\\.]+) ([\d\\.]+)\)/.exec(
      locations[location]?.Geometry?.WGS84
  );
  return match ? parseFloat(match[1]) : 0;
}

export function north(location: string, locations: Locations): number {
  const match = /POINT \(([\d\\.]+) ([\d\\.]+)\)/.exec(
    locations[location]?.Geometry?.WGS84
  );
  return match ? parseFloat(match[2]) : 0;
}
