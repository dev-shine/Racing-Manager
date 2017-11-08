
export const ROOT_PATH = 'http://52.51.111.248:3000'

export const BASE_URL = `${ROOT_PATH}/api/v1`

export const USER = `${BASE_URL}/user`

export const JOIN_REQUEST = `${USER}/join-request`

export const CHANGE_PASSWORD = `${USER}/change-password`

export const REGISTRATION = `${USER}/register`

export const LOGIN = `${USER}/login`

export const MESSAGE = `${BASE_URL}/message`

export const HORSE_STATISTICS_RESULTS = `${BASE_URL}/statistics`

export const HORSE_SLUG = `${BASE_URL}/horse/:slug`

export const HORSE_STATISTICS_RESULTS_DETAILS = `${BASE_URL}/horse/form`

export const HORSE_STATISTICS_FUTURE_DETAILS = `${BASE_URL}/horse/card`

export const UPDATE_HORSE = `${BASE_URL}/horse/:slug`

export const DASHBOARD = `${BASE_URL}/user/dashboard`

export const SYNDICATE = `${BASE_URL}/syndicate`

export const SYNDICATE_SLUG = `${BASE_URL}/syndicate/:slug`

export const SEARCH = `${BASE_URL}/search`

export const SEARCH_ATTRIBUTES = `${BASE_URL}/search/attributes`

export const REGISTRATION_CONFIRMATION = `${USER}/verify`

export const SETUP = `${BASE_URL}/setup`

export const COMMENT = `${MESSAGE}/comment`

export const NEWS = `${BASE_URL}/news`

export const UPLOADED = `${BASE_URL}/uploaded`
