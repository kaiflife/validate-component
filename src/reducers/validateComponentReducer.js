import {ADD_VALIDATE_COMPONENT, REMOVE_VALIDATE_COMPONENT} from "../actions/validateComponent/actions";

const initialState = {
  validators: [],
};

//validator = [
// {
//  id: 'id',
//  validate: () => {},
//  ids: []
// }
//]

const validateComponentReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_VALIDATE_COMPONENT: {
      const validators = state.validators.slice();
      validators.push(payload.validator);
      return {
        ...state,
        validators,
      }
    }
    case REMOVE_VALIDATE_COMPONENT: {
      const validators = state.validators.filter(item => item.id !== payload.id);
      return {
        ...state,
        validators,
      }
    }
    default: return state;
  }
}

export default validateComponentReducer;
