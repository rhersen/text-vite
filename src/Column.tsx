import React from "react";
import _ from "lodash";
import ColumnHead from "./ColumnHead";
import Time from "./Time";
import times from "./times";
import TrainAnnouncement from "./TrainAnnouncement";

function Column(props: {
  announcements: TrainAnnouncement[];
  id: string;
  locations: string[];
}) {
  const ts: { [p: string]: TrainAnnouncement } = times(props.announcements);
  return (
    <div className="tc">
      <ColumnHead announcements={props.announcements} id={props.id} />
      {_.map(props.locations, loc =>
        _.map(["Ankomst", "Avgang"], activityType => (
          <Time
            key={loc + activityType}
            activityType={activityType}
            times={ts}
            loc={loc}
            id={props.id}
          />
        ))
      )}
    </div>
  );
}

export default Column;
