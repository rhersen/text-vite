import React from "react";
import _ from "lodash";
import { line1, line2 } from "./formatLatestAnnouncement";
import getColor from "./color";
import { Actual } from "./currentTrains";
import { differenceInSeconds, parseISO } from "date-fns";

export default function Branch(props: {
  trains: Actual[];
  position?: string;
  size: string;
}) {
  const trainText = (train: Actual) => {
    if (!train.latest) return undefined;
    const secondsAgo = differenceInSeconds(
      new Date(),
      parseISO(train.latest.TimeAtLocationWithSeconds)
    );
    const className = secondsAgo < 30 ? "new" : "old";
    const color = getColor(train.latestDeparture || train.latest);
    return (
      <div className="train" key={train.latest.AdvertisedTrainIdent}>
        <div className={className} style={{ color }}>
          {line1(train)}
        </div>
        <div className={className} style={{ color }}>
          {line2(train)}
        </div>
      </div>
    );
  };
  return <div className="branch">{_.map(props.trains, trainText)}</div>;
}
