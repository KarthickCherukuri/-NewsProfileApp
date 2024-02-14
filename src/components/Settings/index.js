import { useTheme, Toggle } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";
import { MdArrowBack } from "react-icons/md";
const Settings = () => {
  const { theme } = useTheme();
  const goBack = () => {
    window.history.back();
  };
  return (
    <div
      className={"p-4 " + (theme === "dark" ? "text-light" : "text-dark")}
      style={{
        backgroundColor: theme === "dark" ? "#121212" : "white",

        minHeight: "100vh",
      }}>
      <button onClick={goBack} className="settings-button">
        <MdArrowBack
          onClick={goBack}
          style={{
            cursor: "pointer",
            color: theme === "light" ? "#121212" : "white",
            fontSize: "2rem",
          }}
        />
      </button>
      <h1>Settings</h1>
      <div className="d-flex align-items-center" style={{ gap: "30px" }}>
        <p>Theme : {theme}</p>
        <Toggle />
      </div>
    </div>
  );
};

export default Settings;
