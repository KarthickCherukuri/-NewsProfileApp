import { useTheme } from "react-hook-theme";
import "./index.css";

const NewsCard = ({ title, excerpt, thumbnail, publishedAt }) => {
  const { theme } = useTheme();

  return (
    <li className={`news-card ${theme === "dark" ? "dark-news-card" : ""}`}>
      <img src={thumbnail} alt="thumbnail" loading="lazy" />
      <div className="d-flex flex-column">
        <h3>{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <p className="published">{getTimeDifference(publishedAt)}</p>
      </div>
    </li>
  );
};

function getTimeDifference(dateString) {
  const videoDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.abs((now - videoDate) / 1000);

  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  for (let [unit, secondsInUnit] of units) {
    if (diffInSeconds >= secondsInUnit || unit === "second") {
      const value = Math.floor(diffInSeconds / secondsInUnit);
      return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
    }
  }
}

export default NewsCard;
