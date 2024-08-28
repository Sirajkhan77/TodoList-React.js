// Todoitems.jsx
import { MdDeleteForever } from "react-icons/md";
import styles from "./input.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function Items({ name, date }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(name);
            }}
          >
            <MdDeleteForever className={styles.addIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
// 7:59
export default Items;
