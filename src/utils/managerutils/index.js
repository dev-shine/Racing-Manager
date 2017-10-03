import history from 'utils/locationutils'

const loc = history.location.pathname

const editHorseInformationRegex = /^\/horse\/[a-zA-Z0-9-]*\/information\/edit$/

const showEditOptions = () => { // Detirmines if edit options should be displayed
  if (loc.match(editHorseInformationRegex)) {
    return true
  }
  return false
}

export {showEditOptions}
