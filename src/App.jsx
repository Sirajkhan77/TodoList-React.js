import AppName from "./components/appName";
import In from "./components/input";
import ListofItems from "./components/itemsList";
import "./khan.css";
import WelcomeMessage from "./components/welcomMessage";
import TodoItemsContextProvider from "./store/todo-items-store";
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="container">
        <AppName />
        <div id="xxx">
          <In />
          <WelcomeMessage />
          <ListofItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
