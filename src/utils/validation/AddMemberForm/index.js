/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'texts/errormessages'

export const addMemberFormValidators = (type, formValues = {}) => {
  const {
    firstName,
    surname,
    addressLine1,
    addressLine2,
    postcode
  } = formValues

  switch (type) {
    case 'firstName':
      return VALIDATE.NAME(firstName) ? [] : [ERROR.FIRST_NAME]

    case 'sureName':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'addressLine1':
      return VALIDATE.NAME(addressLine1) ? [] : [ERROR.ADDRESS]

    case 'addressLine2':
      return VALIDATE.NAME(addressLine2) ? [] : [ERROR.ADDRESS]

    case 'postcode':
      return VALIDATE.NAME(postcode) ? [] : [ERROR.SURNAME]

    default:
      return []
  }
}
