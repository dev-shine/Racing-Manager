/**
*  @module validateTypes
*/
import * as VALIDATE from 'utils/validateTypes'

/**
*  @module errorMessages
*/
import * as ERROR from 'utils/errormessages'

/**
 *  signUpFormValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const signUpFormValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    firstname,
    surname,
    dateofbirth,
    email,
    phonenumber,
    password,
    confirmpassword
  } = formValues

  switch (type) {
    case 'firstname':
      return VALIDATE.NAME(firstname) ? [] : [ERROR.FIRST_NAME]

    case 'surname':
      return VALIDATE.NAME(surname) ? [] : [ERROR.SURNAME]

    case 'email':
      return VALIDATE.EMAIL(email) ? [] : [ERROR.EMAIL]

    case 'phonenumber':
      return VALIDATE.PHONE(phonenumber) ? [] : [ERROR.PHONE]

    case 'password':
      return VALIDATE.PASSWORD(password) ? [] : [ERROR.PASSWORD]

    case 'confirmpassword':
      return VALIDATE.CONFIRM_PASSWORD(password, confirmpassword) ? [] : [ERROR.CONFIRM_PASSWORD]

    case 'dateofbirth':
      return VALIDATE.DATE_OF_BIRTH(dateofbirth) ? [] : [ERROR.DATE_OF_BIRTH]

    default:
      return []
  }
}

/**
 * Home search validators
 * @param type
 * @param formValues
 * @returns {*}
 */
export const homeSearchValidators = (type, formValues) => {
  const { location, capacity, date } = formValues

  switch (type) {
    case 'location':
      return VALIDATE.LOCATION(location) ? [] : [ERROR.LOCATION]

    case 'capacity':
      return VALIDATE.CAPACITY(capacity) ? [] : [ERROR.CAPACITY]

    case 'date':
      return VALIDATE.DATE(date) ? [] : [ERROR.DATE]

    default:
      return []
  }
}

export const passwordResetValidators = (type, formValues) => {
  const { oldpassword, newpassword, confirmnewpassword } = formValues

  switch (type) {
    case 'oldpassword':
      return VALIDATE.PASSWORD(oldpassword) ? [] : [ERROR.PASSWORD]

    case 'newpassword':
      return VALIDATE.PASSWORD(newpassword) ? [] : [ERROR.PASSWORD]

    case 'confirmpassword':
      return VALIDATE.CONFIRM_PASSWORD(newpassword, confirmnewpassword) ? [] : [ERROR.CONFIRM_PASSWORD]

    default:
      return []
  }
}

/**
 *  accountAddPaymentFormValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const accountAddPaymentFormValidators = (type, formValues) => {
  /**
   *  @const
   */
  const {
    cardnumber,
    cardexpirydate,
    cardstartdate,
    cardname,
    cardcvv
    /*
    postcode,
    buildingname,
    road,
    town,
    county
    */
  } = formValues

  switch (type) {
    case 'cardnumber':
      return VALIDATE.CARD_NUMBER(cardnumber) ? [] : [ERROR.CARD_NUMBER]

    case 'cardstart':
      // REMOVE THIS!!! in favour of the form handling required fields
      return !cardstartdate || VALIDATE.CARD_START(cardstartdate) ? [] : [ERROR.CARD_START]

    case 'cardexpiry':
      return VALIDATE.CARD_EXPIRY(cardexpirydate) ? [] : [ERROR.CARD_EXPIRY]

    case 'cardname':
      return VALIDATE.NAME(cardname) ? [] : [ERROR.CARD_NAME]

    case 'cardcvv':
      return VALIDATE.CARD_CVV(cardnumber, cardcvv) ? [] : [ERROR.CARD_CVV]

    default:
      return []
  }
}
