import { useContext, useRef } from "react";
import { TbDeviceIpadDown } from "react-icons/tb";
import styles from "./input.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
function In() {
  const { addNewItem } = useContext(TodoItemsContext);
  const nameUpdater = useRef();
  const dateUpdater = useRef();
  // 8:30
  const handleAddButtonClicked = (event) => {
    let name = nameUpdater.current.value;
    let date = dateUpdater.current.value;
    nameUpdater.current.value = "";
    dateUpdater.current.value = "";
    addNewItem(name, date);
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
            ref={nameUpdater}
          />
        </div>
        <div className="col-4">
          <input type="date" name="date" ref={dateUpdater} />
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
