import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  siraj: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

//9:15

const newSirajReducer = (currItems, action) => {
  let currentVal = currItems;
  if (action.type === "NEW_ITEM") {
    currentVal = [
      ...currItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    const currentVal = currItems.filter(
      (deletor) => deletor.name !== action.payload.itemName
    );
    return currentVal;
  }
  return currentVal;
};

const TodoItemsContextProvider = ({ children }) => {
  const [siraj, dispatchSiraj] = useReducer(newSirajReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchSiraj(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchSiraj(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ siraj, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
