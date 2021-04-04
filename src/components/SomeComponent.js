import React, {useState} from 'react';
import ValidateComponent from "./ValidateComponent";

const SomeComponent = () => {
  const [validateOn1, setValidateOn1] = useState(false);
  const [validateOn2, setValidateOn2] = useState(false);
  const validate2 = () => {
    console.log('validate1 lvl 2');
  }

  const validate3 = () => {
    console.log('validate1 lvl 3');
  }
  return (
    <div className='some-component'>
      <ValidateComponent validateOn={validateOn1} setValidateOn={setValidateOn1} validate={validate2}>
        <p onClick={() => setValidateOn1(true)}>validate1 lvl 2</p>
        <ValidateComponent setValidateOn={setValidateOn2} validateOn={validateOn2} validate={validate3}>
          <p onClick={() => setValidateOn2(true)}>validate1 lvl 3</p>
        </ValidateComponent>
      </ValidateComponent>
    </div>
  );
};

export default SomeComponent;
