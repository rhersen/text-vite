import { Component } from "react";
import "./App.css";
import TrainAnnouncement from "./TrainAnnouncement";
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

let location: Record<string, string> = { Tu: "Tumba", Khä: "Kallhäll" };

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

      fetch(`/.netlify/functions/announcements?direction=${direction}`)
        .then((response) => response.json())
        .then((json) => {
          const unfiltered: TrainAnnouncement[] = json.TrainAnnouncement;
          let response: TrainAnnouncement[] = unfiltered.filter(
            ({ ProductInformation }) =>
              ProductInformation?.some(
                ({ Description }) => Description === "SL Pendeltåg"
              ) &&
              ProductInformation?.some(
                ({ Description }) => Description === "44"
              )
          );
          this.setState({
            response,
            loaded: direction,
            clicked: "",
          });
          console.log(
            response.map(
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
    return (
      <div>
        <div className="mid-row">
          <span
            className={`${this.arrowClass("n")} arrow-up`}
            onClick={this.getCurrent("n")}
          />
          <div>
            {this.state.response.map(
              ({
                AdvertisedTrainIdent,
                AdvertisedTimeAtLocation,
                TimeAtLocation,
                Canceled,
                LocationSignature,
                ToLocation,
              }) => {
                let toLocation = ToLocation.map(
                  ({ LocationName }) => location[LocationName] || LocationName
                );
                let advertised = hhmm(AdvertisedTimeAtLocation);
                if (Canceled)
                  return (
                    <div key={AdvertisedTrainIdent}>
                      {AdvertisedTrainIdent} {advertised} från{" "}
                      {location[LocationSignature]} till {toLocation} är
                      inställt
                    </div>
                  );
                if (TimeAtLocation) {
                  return (
                    <div key={AdvertisedTrainIdent}>
                      {AdvertisedTrainIdent} {advertised} från{" "}
                      {location[LocationSignature]} till {toLocation} gick{" "}
                      {hhmm(TimeAtLocation)}
                    </div>
                  );
                }
                return (
                  <div key={AdvertisedTrainIdent}>
                    {AdvertisedTrainIdent} {advertised} från{" "}
                    {location[LocationSignature]} till {toLocation} ska gå som
                    vanligt
                  </div>
                );
              }
            )}
          </div>
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

function hhmm(AdvertisedTimeAtLocation: string) {
  return AdvertisedTimeAtLocation.substring(11, 16);
}
