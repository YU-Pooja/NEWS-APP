import axios from 'axios'

export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'

export const fetchNewsLoading = () => ({
  type: FETCH_NEWS_LOADING,
})

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
})

export const fetchNewsFailed = (errorMessage) => ({
  type: FETCH_NEWS_FAILED,
  payload: errorMessage
})

export const fetchNews = () => {
  return async(dispatch) => {
    try {
      dispatch(fetchNewsLoading())
      const res = await axios.get('https://newsapi.org/v2/everything?apiKey=f40203cc39184176a487521beaf0836b&q=India')
      const filteredNews = res.data.articles.filter(article => article.title !== '[Removed]')
      dispatch(fetchNewsSuccess(filteredNews))
    } catch (error) {
      console.log(error)
      dispatch(fetchNewsFailed(error.message))
    }
  }
}

/*
  # redux-thunk:
    - External dependency
    - Create special action creators which can return a async function instead of an action object
    - Handle async requests
    - Returned async function has dispatch as a parameter
    - Within this special action creator, other action creators can be dispatched


  - fetchNews
    - Before API Call: fetchNewsLoading()
    - After API Call, if successful: fetchNewsSuccess()
    - After API Call, if failed: fetchNewsFailed()
*/

