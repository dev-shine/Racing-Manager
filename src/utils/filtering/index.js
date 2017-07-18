export const preparePayloadForHorseSearch = (data) => {
  const {
    filterOpen,
    filters,
    sort,
    query
  } = data

  let payload = {
    query
  }

  if (Object.keys(sort).length) {
    payload['sort'] = sort
  }

  if (filterOpen) {
    payload['filters'] = filters
  }

  return payload
}