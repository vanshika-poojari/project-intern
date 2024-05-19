import { useState, useEffect } from "react";
import "./Components.css";

const ApiFetch = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  console.log(props.visibleData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSearchResults(data.data.saltSuggestions);
        console.log(data.data.saltSuggestions);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return props.visibleData ? (
    <div>
    
      {error && <p>Error: {error}</p>}

      <ul>
        {searchResults.map((item) => (
          
          <li key={item.id} className="list_style">
            <p className = "tab3"> From₹80 </p>
             <p className = "tab2">Type of Salt: </p>
             <p className = "tab">Tablet|100mg|5 strips</p>
             
            <ul className="text">
              <li className="inner_list">Form : </li>
              <li className="inner_list">Packing : </li>
              <li className="inner_list">Strength : </li>
            </ul>

            <div>
              <p className="list_value">
                {Object.values(item.most_common.Form).map((word) => (
                  <span key={Math.random()}> {word} </span>
                ))}
              </p>
              <p className="list_value1">
                {Object.values(item.most_common.Strength).map((word) => (
                  <span key={Math.random()}> {word} </span>
                ))}
              </p>
              <p className="list_value2">
                {Object.values(item.most_common.Packing.split(" ")).map(
                  (word) => (
                    <span key={Math.random()}> {word} </span>
                  )
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="footer">"Find medicines with amazing discount"</div>
  );
};

export default ApiFetch;
