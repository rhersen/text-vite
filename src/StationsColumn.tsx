import React from "react";
import cx from "classnames";
import _ from "lodash";

function StationsColumn(props: { locations: string[] }) {
  return (
    <div className="tc station">
      <span className="td station">
        train
        <br />
        station
      </span>
      {_.map(props.locations, loc =>
        _.map(["Ankomst", "Avgang"], (activity: string) => (
          <span key={loc + activity} className={cx("td", "station", activity)}>
            {activity.substr(0, 3).toLowerCase()} {loc}
          </span>
        ))
      )}
    </div>
  );
}

export default StationsColumn;
