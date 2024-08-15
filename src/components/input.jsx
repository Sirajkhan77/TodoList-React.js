import { useState } from "react";

// input.jsx
function In({ onNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(name, date);
    setName("");
    setDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter TODO here"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="col-4" onChange={handleDate}>
          <input type="date" name="date" value={date} />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleAddButtonClicked}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default In;
