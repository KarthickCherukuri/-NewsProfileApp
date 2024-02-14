import React from "react";
import { useTheme } from "react-hook-theme";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
const NotFoundPage = ({ history }) => {
  const { theme } = useTheme();
  setTimeout(() => {
    history.replace("/");
  }, 3000);
  return (
    <div
      className={
        "text-center p-4 " + (theme === "dark" ? "text-light " : "text-dark ")
      }
      style={{
        backgroundColor: theme === "light" ? "white" : "#121212",
        height: "100vh",
      }}>
      <h1 style={{ fontSize: "60px" }}>404</h1>
      <p style={{ fontSize: "20px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={{ fontSize: "20px", color: "#234567" }}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
