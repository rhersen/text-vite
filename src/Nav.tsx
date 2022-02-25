import React from "react";

function Nav(props: {
  getTrains: ({
    branch,
    direction
  }: {
    branch: string;
    direction: string;
  }) => Promise<void>;
}) {
  return (
    <div id="index">
      <span>
        <button
          onClick={() => props.getTrains({ branch: "w", direction: "n" })}
        >
          Järfälla norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "w", direction: "s" })}
        >
          söderut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "n", direction: "n" })}
        >
          Solna norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "n", direction: "s" })}
        >
          söderut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "c", direction: "n" })}
        >
          Centralen norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "c", direction: "s" })}
        >
          söderut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "s", direction: "n" })}
        >
          Huddinge norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "s", direction: "s" })}
        >
          söderut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "e", direction: "n" })}
        >
          Haninge norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "e", direction: "s" })}
        >
          söderut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "u", direction: "n" })}
        >
          Arlanda norrut
        </button>
      </span>
      <span>
        <button
          onClick={() => props.getTrains({ branch: "u", direction: "s" })}
        >
          söderut
        </button>
      </span>
    </div>
  );
}

export default Nav;
