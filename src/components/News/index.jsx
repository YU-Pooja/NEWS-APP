import { useEffect } from 'react'
import SingleNews from '../SingleNews'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../../actions/news'

function News() {
  const news = useSelector(store => store.news)
  const loading = useSelector(store => store.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className='container px-2 md:mx-auto flex justify-evenly flex-wrap'>
      {!loading ? 
        news.map((singleNews, index) => (
          <SingleNews key={index} singleNews={singleNews} />
        )) : 
      <img src='https://loading.io/assets/mod/spinner/spinner/lg.gif' alt='loading' style={{ height: '60vh' }} />}
    </div>
  )
}

export default News


/*
  # Font-size: text-2xl, text-3xl, text-4xl, text-[50px]
  # Color: text-white, text-black, text-[#2272FF]
  # Font-weight: font-bold, font-semibold, font-[600]
*/