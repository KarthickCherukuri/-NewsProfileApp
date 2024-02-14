import { IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "react-hook-theme";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
const UserDetails = ({ imgUrl, bio, name }) => {
  const { theme } = useTheme();
  return (
    <div className="d-flex justify-content-center">
      <div className="user-details-container">
        <div className="user-details">
          <img src={imgUrl} />
          <div>
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
        </div>
        <Link to="/settings">
          <button
            className={
              "settings-button " +
              (theme === "dark" ? "text-light" : "text-dark")
            }>
            <IoSettingsOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
