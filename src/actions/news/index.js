import {
  getNews
} from 'api/Services'

import {
  formatNews
} from 'utils/news'

export const FETCHING_NEWS = 'news/FETCHING_NEWS'
export const FETCHED_NEWS = 'news/FETCHED_NEWS'
export const FAILED_TO_FETCH_NEWS = 'news/FAILED_TO_FETCH_NEWS'

export const fetchingNews = () => ({
  type: FETCHING_NEWS
})

export const fetchedNews = (news) => ({
  type: FETCHED_NEWS,
  news
})

export const failedToFetchNews = (error) => ({
  type: FAILED_TO_FETCH_NEWS,
  error
})

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchingNews())

    return getNews()
    .then(formatNews)
    .then((data) => {
      dispatch(fetchedNews(data))
      return Promise.resolve(data)
    })
    .catch((error) => {
      dispatch(failedToFetchNews(error))
      return Promise.reject(error)
    })
  }
}