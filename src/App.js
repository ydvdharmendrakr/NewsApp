import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <NavBar />
          <Route path="/">
           {/* {
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            } */}
         </Route>

          <Route ecxat path="/business">
            {
              <News
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          </Route>

          <Route ecxat path="/entertainment">
            {
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          </Route>
          <Route ecxat path="/general">
            {
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          </Route>

          <Route ecxat path="/health">
            {
              <News key="health"
               pageSize={5} 
               country="in" 
               category="health" />
            }
          </Route>

          <Route ecxat path="/science">
            {
              <News
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          </Route>

          <Route ecxat path="/sports">{
              <News key="sports"
               pageSize={5}
               country="in" 
               category="sports" />
            }
          </Route>

          <Route ecxat path="/technology">
            {
              <News
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          </Route>
        </Routes>
      </div>
    );
  }
}
