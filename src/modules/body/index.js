import React, { useEffect, useState } from "react";
import "./index.scss";
import Programs from "./components/programs";
import Filter from "./components/filter";
import Loader from "../../components/loader";

function Body() {
  const [fetchedData, setFetchedData] = useState([]);
  const [launchYear, setLaunchYear] = useState();
  const [launchSuccess, setLaunchSuccess] = useState();
  const [landingSuccess, setLandingSuccess] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window && window.__STATE__) {
      console.log(window.__STATE__);
      setFetchedData(window.__STATE__);
      delete window.__STATE__;
    } else {
      let url = "https://api.spaceXdata.com/v3/launches?limit=100";
      if (launchYear) {
        url += `&launch_year=${launchYear}`;
      }
      if (launchSuccess) {
        url += `&launch_success=${launchSuccess}`;
      }
      if (landingSuccess) {
        url += `&land_success=${landingSuccess}`;
      }
      setLoading(true);
      fetch(url).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setFetchedData(data);
            setLoading(false);
          });
        }
      });
    }
  }, [launchYear, launchSuccess, landingSuccess]);

  return (
    <>
      <Loader show={loading} />
      <div className="body-wrapper">
        <aside>
          <Filter
            launchYear={launchYear}
            setLaunchYear={setLaunchYear}
            launchSuccess={launchSuccess}
            setLaunchSuccess={setLaunchSuccess}
            landingSuccess={landingSuccess}
            setLandingSuccess={setLandingSuccess}
          />
        </aside>
        <section>
          {fetchedData.length !== 0 && <Programs fetchedData={fetchedData} />}
        </section>
      </div>
    </>
  );
}
export default Body;
