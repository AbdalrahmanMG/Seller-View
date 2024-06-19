import "./App.css";
import PoductCard from "./components/PoductCard";

function App() {

  return (
<div className="sm:mx-28 my-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      <PoductCard/>
      <PoductCard/>
      <PoductCard/>
      <PoductCard/>
      <PoductCard/>
      <PoductCard/>
      <PoductCard/>
    </div>
</div>
  );
}

export default App;
