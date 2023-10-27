import Details from "./Details";
import Home from "./Home";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}
