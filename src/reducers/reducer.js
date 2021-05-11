import { CHANGE_IMAGES } from '../constants/constants'

export const reducer = (state, action) => {
    switch (action.type) {
      case CHANGE_IMAGES:
        return {...state, index: action.payload};
    }

    return state;
}