import {ADD_VALIDATE_COMPONENT, REMOVE_VALIDATE_COMPONENT} from "./actions";

const handleValidate = (payload) => {
  const parentValidator = document.body.querySelector(`.js-validate-component[data-uuid="${payload.id}"]`);
  const childrenValidators = parentValidator.querySelectorAll(`.js-validate-component`);
  const validatorIds = Array.from(childrenValidators).map(el => el.dataset.uuid);

  return {
    type: ADD_VALIDATE_COMPONENT,
    payload: {
      validator: {
          id: payload.id,
          ids: [payload.id, ...validatorIds],
          validate: payload.validate,
      },
    },
  }
};

const stopValidate = (payload) => {
  return {
    type: REMOVE_VALIDATE_COMPONENT,
    payload,
  }
};


export {
  handleValidate,
  stopValidate,
};
