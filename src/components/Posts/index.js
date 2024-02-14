import NewsCard from "../NewsCard";
import "./index.css";
const Posts = ({ data }) => {
  const { articles } = data;
  if (articles == null) {
    return <p>error</p>;
  }
  console.log(articles[1].title);

  return (
    <ul className="m-0 p-0">
      {articles.map(
        (each) =>
          each.title !== `[Removed]` &&
          each.urlToImage && (
            <a href={each.url} key={each.url} target="_blank" rel="noreferrer">
              <NewsCard
                thumbnail={each.urlToImage}
                title={each.title}
                excerpt={each.description}
                publishedAt={each.publishedAt}
              />
            </a>
          )
      )}
    </ul>
  );
};

export default Posts;
