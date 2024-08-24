import { useState } from "react";
import { TbDeviceIpadDown } from "react-icons/tb";
import styles from "./input.module.css";
function In({ onNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    onNewItem(name, date);
    setName("");
    setDate("");
    // console.log(event);
    event.preventDefault();
  };
  // 8:16
  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
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
        <div className="col-4">
          <input type="date" name="date" value={date} onChange={handleDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <TbDeviceIpadDown className={styles.addIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default In;
