import { useContext } from "react";
import styles from "./welcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = ({}) => {
  const { siraj } = useContext(TodoItemsContext);
  return siraj.length === 0 && <h1 className={styles.hero}>Enjoy Your day</h1>;
};
export default WelcomeMessage;
