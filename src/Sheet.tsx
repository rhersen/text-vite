import React from "react";
import StationsColumn from "./StationsColumn";
import TrainColumns from "./TrainColumns";
import TrainAnnouncement from "./TrainAnnouncement";

function Sheet(props: {
  announcements: TrainAnnouncement[];
  locations: string[];
}) {
  return (
    <div id="sheet">
      <StationsColumn locations={props.locations} />
      <TrainColumns
        announcements={props.announcements}
        locations={props.locations}
      />
    </div>
  );
}

export default Sheet;
