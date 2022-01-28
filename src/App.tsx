import { Component } from "react";
import _ from "lodash";
import "./App.css";
import TrainAnnouncement from "./TrainAnnouncement";
import currentTrains from "./currentTrains";
import branchDivider from "./branchDivider";
import Branch from "./Branch";
import Locations from "./Locations";

type MyState = {
  locations: Locations;
  response: TrainAnnouncement[];
  msg: string;
  loaded: string;
  clicked: string;
  eventSource: EventSource | null;
  eventSourceStarted: Date | null;
};

export default class App extends Component<{}, MyState> {
  state: MyState = {
    locations: {},
    response: [],
    msg: "",
    loaded: "",
    clicked: "",
    eventSource: null,
    eventSourceStarted: null,
  };

  async componentDidMount() {
    const response = await fetch("/.netlify/functions/locations");
    this.setState({ locations: await response.json() });
  }

  componentWillUnmount() {
    if (this.state.eventSource) {
      this.state.eventSource.close();
      this.setState({ eventSource: null, eventSourceStarted: null });
    }
  }

  getCurrent(direction: string) {
    return () => {
      this.setState({
        clicked: direction,
        loaded: "",
      });

      let location: Record<string, string> = { Tu: "Tumba", Khä: "Kallhäll" };

      function hhmm(AdvertisedTimeAtLocation: string) {
        return AdvertisedTimeAtLocation.substring(11, 16);
      }

      fetch(`/.netlify/functions/announcements?direction=${direction}`)
        .then((response) => response.json())
        .then((json) => {
          const response: TrainAnnouncement[] = json.TrainAnnouncement;
          console.log(
            response
              .filter(
                ({ ProductInformation }) =>
                  ProductInformation?.some(
                    ({ Description }) => Description === "SL Pendeltåg"
                  ) &&
                  ProductInformation?.some(
                    ({ Description }) => Description === "44"
                  )
              )
              .map(
                ({
                  AdvertisedTimeAtLocation,
                  TimeAtLocation,
                  Canceled,
                  LocationSignature,
                }) => {
                  let advertised = hhmm(AdvertisedTimeAtLocation);
                  if (Canceled)
                    return `${advertised} från ${location[LocationSignature]} är inställt`;
                  if (TimeAtLocation) {
                    return `${advertised} från ${
                      location[LocationSignature]
                    } gick ${hhmm(TimeAtLocation)}`;
                  }
                  return `${advertised} från ${location[LocationSignature]} ska gå som vanligt`;
                }
              )
          );
        });
    };
  }

  render() {
    const grouped = _.groupBy(
      currentTrains(this.state.locations, this.state.response),
      branchDivider(this.state.locations)
    );

    return (
      <div>
        <div className="row">
          <Branch
            key={"nw"}
            trains={grouped.nw}
            size="normal"
            locations={this.state.locations}
          />
          <Branch
            key={"ne"}
            trains={grouped.ne}
            size="normal"
            locations={this.state.locations}
          />
        </div>
        <div className="mid-row">
          <span
            className={`${this.arrowClass("n")} arrow-up`}
            onClick={this.getCurrent("n")}
          />
          <Branch
            key={"c"}
            trains={grouped.c}
            size="normal"
            locations={this.state.locations}
          />
          <div className="right-col">
            <span
              className={`${this.arrowClass("s")} arrow-down`}
              onClick={this.getCurrent("s")}
            />
            {this.state.eventSource ? (
              <span
                className="stop"
                onClick={() => {
                  if (this.state.eventSource) {
                    this.state.eventSource.close();
                    this.setState({
                      loaded: "",
                      clicked: "",
                      eventSource: null,
                      eventSourceStarted: null,
                    });
                  }
                }}
              >
                STOP
              </span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <Branch
            key={"sw"}
            trains={grouped.sw}
            size="normal"
            locations={this.state.locations}
          />
          <Branch
            key={"se"}
            trains={grouped.se}
            size="normal"
            locations={this.state.locations}
          />
        </div>
      </div>
    );
  }

  private arrowClass(direction: string) {
    return this.state.loaded === direction
      ? "loaded"
      : this.state.clicked === direction
      ? "clicked"
      : "idle";
  }
}
