import { CHANGE_IMAGES } from '../constants/constants'

export const changeImages = (newIndex) => {
    return {
      type: CHANGE_IMAGES,
      payload: newIndex
    }
}