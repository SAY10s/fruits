
import './App.css'
import AscName from "./AscName.jsx";
import FRUITS from "./fruit.js";
import AscCalories from "./AscCalories.jsx";

function App() {

  return (
    <>
        <AscName fruits={FRUITS} />
        <br/>
        <AscCalories fruits={FRUITS} />
    </>
  )
}

export default App
