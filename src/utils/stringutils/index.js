import { TRAILING_SPACES_REG } from 'utils/validation/ValidationTypes'

export const trim = (str = '') => {
  let nStr = str.replace(TRAILING_SPACES_REG, '')
  return nStr
}
