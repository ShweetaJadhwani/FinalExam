import React from "react";

const Handleform = () => {
  return (
    <div>
      <input
        type="Text"
        id="AwardTitle"
        placeholder="AwardTitle"
        value={FitnessChampion}
      />
      <input
        type="Text"
        id="AwardDescription"
        placeholder="AwardDescription"
        value={Complete10Workouts}
      />
      <input
        type="Number"
        id="AwardRequirements"
        placeholder="AwardRequirements"
        value={10}
      />
      <button class = "Submit" onChange={addEventListener} onClick={Add/Update}>Submit</button>
      <button class="Clear" onClick={clear}>Clear</button>
      <button class="Reset" onClick={Reset}>Reset</button>
    </div>
  );
};

export default Handleform;
