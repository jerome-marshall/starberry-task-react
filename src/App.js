import "./App.css";
import SearchResultPage from "./pages/search_result/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./pages/details/Detail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import api from "./api/api";
import { useEffect, useState } from "react";
import Login from "./pages/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  //Retrive data from API
  useEffect(() => {
    const getData = async () => {
      let data = await api.get();
      if (data["status"] === 200) {
        setData(data["data"]);
      }
    };
    getData();
  }, []);

  //Check if user is logged in
  return isLoggedIn ? (
    // if logged in return the search page
    <div className="wrapper">
      {/* Handle Routes */}
      <Router>
        <div className="App">
          <header className="App-header">
            <Header setIsLoggedIn={setIsLoggedIn} />
          </header>
          <main className="content">
            <Switch>
              <Route path="/detail">
                {/* Render the detail page only if the data is available */}
                {data && data[selectedIndex] === undefined ? (
                  <div>Loading...</div>
                ) : (
                  <DetailPage data={data[selectedIndex]} />
                )}
              </Route>

              <Route path="/">
                <SearchResultPage
                  data={data}
                  setSelectedIndex={setSelectedIndex}
                />
              </Route>
            </Switch>
          </main>
          <footer className="App-footer">
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  ) : (
    // if user is not logged-in return the login page
    <Login setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
