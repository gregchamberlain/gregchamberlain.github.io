import { CALL_API, Schemas } from '../middleware/api'

export const BUSINESS_REQUEST = 'BUSINESS_REQUEST'
export const BUSINESS_SUCCESS = 'BUSINESS_SUCCESS'
export const BUSINESS_FAILURE = 'BUSINESS_FAILURE'

function fetchBusiness(business_id) {
  return {
    [CALL_API]: {
      types: [ BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FAILURE ],
      endpoint: `businesses/${business_id}?includeProducts=true`,
      schema: Schemas.BUSINESS
    }
  }
}

export function loadBusiness(business_id) {
  return (dispatch, getState) => {
    const business = getState().entities.businesses[business_id]
    if (business) {
      return null
    }

    return dispatch(fetchBusiness(business_id))
  }
}
