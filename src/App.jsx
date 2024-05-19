import { useState } from "react";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Icon from "./components/Icon";
import Search from "./components/Search";

function App() {
  const [visibleData, setVisibleData] = useState();

  function getData(data) {
    setVisibleData(data);
    console.log(data);
  }
  return (
    <>
      <Search getData={getData} />
      <Icon />
      <ApiFetch visibleData={visibleData} />
    </>
  );
}

export default App;
