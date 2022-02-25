import React from "react";
import _ from "lodash";
import TrainAnnouncement from "./TrainAnnouncement";

function ColumnHead(props: { announcements: TrainAnnouncement[]; id: string }) {
  const found: TrainAnnouncement | undefined = props.announcements.find(
    a => a.AdvertisedTrainIdent === props.id && a.ToLocation
  );
  return (
    <span className="td">
      {_.map(found ? found.ToLocation : [], "LocationName")}
      <br />
      {props.id}
    </span>
  );
}

export default ColumnHead;
