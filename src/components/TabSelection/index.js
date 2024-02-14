import "./index.css";
const TabSelection = ({ options, setSelectedTab, selectedTab }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="tab-selections">
        {options.map((each) => (
          <label
            className={selectedTab === each ? "selected-tab" : ""}
            key={each}>
            {each}
            <input
              type="radio"
              name="tab"
              value={each}
              onChange={(e) => setSelectedTab(e.target.value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default TabSelection;
