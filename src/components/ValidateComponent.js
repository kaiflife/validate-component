import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {handleValidate, stopValidate} from "../actions/validateComponent";
import { v4 as uuidv4 } from 'uuid';

const ValidateComponent = ({validateOn, setValidateOn, validate, children}) => {
  const validators = useSelector(state => state.validateComponent.validators);
  const dispatch = useDispatch();

  const [validateId] = useState(uuidv4());

  useEffect(() => {
    const validator = validators.find(item => item.ids.includes(validateId));
    console.log(validator);
    if(validator) {
      console.log('validateId', validateId);
      console.log('parentId', validator.id);
      onValidate(null, 'rest', validator);
    }
  }, [validators]);

  useEffect(() => {
    if(validateOn) {
      setValidateOn(false);
      onValidate();
    }
  }, [validateOn]);

  const onValidate = (e, rest, validator) => {
    if(rest === 'rest') {
      try {
        const timer = validator.ids.findIndex(item => item === validateId)+1;
        setTimeout(() => {
          validator.validate(validateId);
        }, timer);
        dispatch(stopValidate({id: validator.id}));
        return;
      } catch (e) {
        console.error('error validate-component', e);
      }
    }
    if(!validate) return;
    dispatch(handleValidate({
      id: validateId,
      validate: (value) => validate(value),
    }));
  }

  return <div className='js-validate-component' data-uuid={validateId}>{children}</div>;
};

export default ValidateComponent;
