import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {
  return (
      <div className="wrap">
        <SimpsonComponent
            itemName={"Bart"}
            pic={"https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"}
        />
        <SimpsonComponent
            itemName={"Homer"}
            pic={"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"}
        />
        <SimpsonComponent
            itemName={"Marge"}
            pic={"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"}
        />
      </div>
  );
}

export default App;
