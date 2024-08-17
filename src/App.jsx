// App.jsx
import { useState } from "react";
import AppName from "./components/appName";
import In from "./components/input";
import ListofItems from "./components/itemsList";
import "./khan.css";
import WelcomeMessage from "./components/welcomMessage";

function App() {
  const [siraj, setSiraj] = useState([]); // Initialize the state with an empty array

  const handleAddTodo = (itemName, itemDate) => {
    const newTodoItems = [...siraj, { name: itemName, date: itemDate }];
    setSiraj(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const todoItemDeletor = siraj.filter(
      (deletor) => deletor.name !== todoItemName
    );
    setSiraj(todoItemDeletor);
  };
  // 7:20

  return (
    <center className="container">
      <AppName />
      <div id="xxx">
        <In onNewItem={handleAddTodo} />
        {siraj.length === 0 && <WelcomeMessage />}
        <ListofItems khan={siraj} onDelete={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
