import './App.css';
import ValidateComponent from "./components/ValidateComponent";
import SomeComponent from "./components/SomeComponent";
import {useState} from "react";

function App() {
  const [validateOn1, setValidateOn1] = useState(false);
  const [validateOn2, setValidateOn2] = useState(false);
  const validate1 = (value) => {
    console.log('validate1', value);
  }

  const validate2 = () => {
    console.log('validate2');
  }

  return (
    <div className="App">
      <ValidateComponent validateOn={validateOn1} setValidateOn={setValidateOn1} validate={validate1}>
        <p onClick={() => setValidateOn1(true)}>validate1 lvl 1</p>
        <SomeComponent />
      </ValidateComponent>
      <ValidateComponent validateOn={validateOn2} setValidateOn={setValidateOn2} validate={validate2}>
        <div className='test'>
          <p onClick={() => setValidateOn2(true)}>validate2 lvl 1</p>
        </div>
      </ValidateComponent>
    </div>
  );
}

export default App;
