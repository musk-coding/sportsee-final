import { useState, useEffect } from "react";
import { getUser, getActivityByUser } from "./services/user.service";
import Greeting from "./components/Greeting";
import Feedback from "./components/Feedback";
import "./App.css";
import Activity from "./components/Activity";

const USERS_IDS = [12, 18];

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  const [userId, setUserId] = useState(
    USERS_IDS[Math.floor(Math.random() * USERS_IDS.length)]
  );

  useEffect(() => {
    async function fetchData() {
      const user = (await getUser(userId)).data;
      const userActivity = (await getActivityByUser(userId)).data.data.sessions;
      // console.log(user);
      setUser(user);
      setUserActivity(userActivity);
      setIsLoaded(true);
    }

    fetchData();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav>
        <img src="assets/logo.svg" alt="SportSee Logo" className="logo" />
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Règlage</li>
          <li>Communauté</li>
        </ul>
      </nav>
      <div className="main">
        <div className="side-menu">
          <div className="side-menu--nav">
            <img src="assets/side-menu/yoga.svg" alt="Yoga" />
            <img src="assets/side-menu/swim.svg" alt="Swimming" />
            <img src="assets/side-menu/bike.svg" alt="Biking" />
            <img src="assets/side-menu/dumbell.svg" alt="Weight lifting" />
          </div>
          <p className="copyright">Copyright, SportSee 2020</p>
        </div>
        <div className="display">
          <Greeting userName={user.data.userInfos.firstName} />
          <div className="charts">
            <div className="daily-activity">
              <Activity data={userActivity} />
            </div>
            <div className="daily-intake">
              <Feedback
                icon="assets/icons/calories-icon.svg"
                quantity={user.data.keyData.calorieCount}
                unit="kCal"
                type="Calories"
              />
              <Feedback
                icon="assets/icons/protein-icon.svg"
                quantity={user.data.keyData.proteinCount}
                unit="g"
                type="Proteines"
              />
              <Feedback
                icon="assets/icons/carbs-icon.svg"
                quantity={user.data.keyData.carbohydrateCount}
                unit="g"
                type="Glucides"
              />
              <Feedback
                icon="assets/icons/fat-icon.svg"
                quantity={user.data.keyData.lipidCount}
                unit="kCal"
                type="Calories"
              />
            </div>
            <div className="data-group">
              <div className="average-session"></div>
              <div className="stats"></div>
              <div className="score"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
