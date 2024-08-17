// Todoitems.jsx
import { MdDeleteForever } from "react-icons/md";
import styles from "./input.module.css";
function Items({ name, date, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              onDeleteClick(name);
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
