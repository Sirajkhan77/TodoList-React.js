import styles from "./itemsList.module.css";
import Items from "./Todoitems";
const ListofItems = ({ khan, onDelete }) => {
  return (
    <>
      <div className={styles.items}>
        {khan.map((x) => (
          <Items name={x.name} date={x.date} onDeleteClick={onDelete}></Items>
        ))}
      </div>
    </>
  );
};
export default ListofItems;
