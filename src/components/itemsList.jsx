import styles from "./itemsList.module.css";
import Items from "./Todoitems";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const ListofItems = ({ onDelete }) => {
  const { siraj } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles.items}>
        {siraj.map((x) => (
          <Items
            name={x.name}
            date={x.date}
            key={x.name}
            onDeleteClick={onDelete}
          ></Items>
        ))}
      </div>
    </>
  );
};
export default ListofItems;
