import { useTheme } from "react-hook-theme";
import UserDetails from "../UserDetails";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect, useCallback } from "react";
import TabSelection from "../TabSelection";
import Posts from "../Posts";

const tabSelection = {
  article: "Posts",
  bookmarks: "Bookmarks",
};

const loadingStateObj = {
  initial: "initial",
  loading: "loading",
  success: "success",
  error: "error",
};
const Home = () => {
  const { theme } = useTheme();
  const [news, setNews] = useState(null);
  const [loadingState, setLoadingState] = useState(loadingStateObj.initial);
  const [selectedTab, setSelectedTab] = useState(tabSelection.article);

  if (theme === "dark") {
    document.body.classList.add("dark-body");
  } else {
    document.body.classList.remove("dark-body");
  }

  const fetchBackupData = async () => {
    try {
      setLoadingState(loadingStateObj.loading);
      const response = await fetch(
        `/${
          selectedTab === tabSelection.article ? "backup1.json" : "backup2.json"
        }`
      );
      if (response.ok) {
        const data = await response.json();
        setLoadingState(loadingStateObj.success);
        console.log(data);
        setNews(data);
      }
    } catch (e) {
      console.log(e);
      setLoadingState(loadingStateObj.error);
    }
  };

  const fetchData = async () => {
    try {
      setLoadingState(loadingStateObj.loading);
      const url =
        selectedTab === tabSelection.article
          ? "https://newsapi.org/v2/everything?q=tesla&from=2024-01-14&sortBy=publishedAt&apiKey=74405629c1a642079cb0768c2e817368"
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=74405629c1a642079cb0768c2e817368";
      const response = await fetch(url);
      const data = await response.json();
      setLoadingState(loadingStateObj.success);
      if (response.ok) {
        setNews(data);
      } else {
        await fetchBackupData();
      }
    } catch (e) {
      console.log(e);

      await fetchBackupData();
    }
  };

  const memorizedFetch = useCallback(async () => {
    await fetchData();
  }, [selectedTab]);

  useEffect(() => {
    memorizedFetch();
  }, [selectedTab]);

  const RenderData = () => {
    if (loadingState === loadingStateObj.loading) {
      return (
        <div className="d-flex justify-content-center flex-row">
          <ThreeDots color="#00BFFF" height={100} width={100} />
        </div>
      );
    }
    if (loadingState === loadingStateObj.success) {
      return <Posts data={news} />;
    }
    return <div>Error</div>;
  };

  return (
    <div
      className={theme === "dark" ? "text-light " : "text-dark "}
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#121212" : "white",
      }}>
      <UserDetails
        imgUrl={"https://source.unsplash.com/random/500x500"}
        name={"Karthick Cherukuri"}
        bio={"contact me at:karthickcherukuri@gmail.com"}
      />
      <TabSelection
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        options={[tabSelection.article, tabSelection.bookmarks]}
      />
      <RenderData />
    </div>
  );
};

export default Home;
