import "./App.css";
import SearchResultPage from "./pages/search_result/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./pages/details/Detail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import api from "./api/api";
import { useEffect, useState } from "react";

function App() {
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

  //used to store data from API
  const [data, setData] = useState({});

  //used to store search index
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="wrapper">
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <main className="content">
            <Switch>
              <Route path="/detail">
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
  );
}

export default App;
