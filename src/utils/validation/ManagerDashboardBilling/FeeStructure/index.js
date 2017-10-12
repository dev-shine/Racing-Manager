/**
 *  @module validateTypes
 */
import * as VALIDATE from 'utils/validation/ValidationTypes'

/**
 *  @module errorMessages
 */
import * as ERROR from 'texts/errormessages'

/**
 *  FeeStructureValidators
 *  @param  {String} type
 *  @param  {Object} formValues
 *  @return {Array}
 */
export const feeStructureValidators = (type, formValues = {}) => {
  /**
   *  @const
   */
  const {
    fixedperiod,
    openended,
    oneinclusive,
    ongoing,
    fee,
    initialfee,
    monthlyfee,
    perioddate
  } = formValues

  switch (type) {
    case 'fixedperiod':
      return VALIDATE.REQUIRED(fixedperiod) ? [] : [ERROR.REQUIRED]

    case 'openended':
      return VALIDATE.REQUIRED(openended) ? [] : [ERROR.REQUIRED]

    case 'oneinclusive':
      return VALIDATE.REQUIRED(oneinclusive) ? [] : [ERROR.REQUIRED]

    case 'ongoing':
      return VALIDATE.REQUIRED(ongoing) ? [] : [ERROR.REQUIRED]

    case 'fee':
      return VALIDATE.REQUIRED(fee) ? [] : [ERROR.REQUIRED]
    case 'initialfee':
      return VALIDATE.IS_NUMBER(initialfee) ? [] : [ERROR.INITIAL_FEE]

    case 'monthlyfee':
      return VALIDATE.IS_NUMBER(monthlyfee) ? [] : [ERROR.MONTHLY_FEE]

    case 'perioddate':
      return VALIDATE.DATE(perioddate) ? [] : [ERROR.PERIOD_DATE]

    default:
      return []
  }
}