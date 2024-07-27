function SingleNews({ singleNews }) {
  const { title, description, urlToImage, publishedAt, author, url } = singleNews;
  const defaultNewsImageURL = 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png'
  return (
    <div className="md:w-[30%] mt-5 bg-white rounded shadow-2xl">
      <img className="w-full rounded-t h-[280px]" src={urlToImage || defaultNewsImageURL} alt='img-url' />
      <div className="p-5">
        <p className="text-xl">{title}</p>
        <p className="min-h-[72px] italic">{description && description.length > 120 ? `${description.slice(0, 120)}...` : description}</p>
        <p className="text-xs py-5">Reported by: {author} | Date: {publishedAt}</p>
        <a className="bg-[#96C2DB] text-white py-2 px-5 rounded" href={url} target='_blank' rel="noreferrer">Read more</a>
      </div>
    </div>
  )
}

export default SingleNews


/*
  sm: Small
  md: Medium
  lg: Large
*/