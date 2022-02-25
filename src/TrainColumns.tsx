import React from "react";
import _ from "lodash";
import trains from "./trains";
import Column from "./Column";
import TrainAnnouncement from "./TrainAnnouncement";

function TrainColumns(props: {
  announcements: TrainAnnouncement[];
  locations: string[];
}) {
  return (
    <div className="tr tbody">
      {_.map(trains(props.announcements, new Date()), id => (
        <Column
          key={id}
          announcements={props.announcements}
          id={id}
          locations={props.locations}
        />
      ))}
    </div>
  );
}

export default TrainColumns;
