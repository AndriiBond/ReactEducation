import { CHANGE_IMAGES } from '../constants/constants'

const initialState = {
  index: 0,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_IMAGES:
        return {...state, index: action.payload};
    }

    return state;
}