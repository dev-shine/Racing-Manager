import { TRAILING_SPACES_REG } from 'utils/validation/ValidationTypes'

export const trim = (str = '') => {
  return str.replace(TRAILING_SPACES_REG, '')
}

export const toUpperCase = (str = '') => {
  if (typeof str !== 'string') {
    return str
  }

  return str.toUpperCase()
}