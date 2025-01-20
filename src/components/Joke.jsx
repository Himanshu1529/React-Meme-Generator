import React from "react";

function Joke(props) {
  return (
    <div>
      <div>
        {props.setup && <p className="setup">Setup: {props.setup}</p>}
        <p className="punchline">Punchline: {props.punchline}</p>
        <hr />
      </div>
    </div>
  );
}

export default Joke;
