import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Form from "./components/Form/Form";
import SinglePlace from "./components/Place/SinglePlace";

function App() {
  return (

    <Router>
    <Routes>
      <Route path="/" exact element={<Home />}>
        </Route>
        <Route path="/create-place" exact element={<Form />}>
        </Route>
        <Route path='/place/:placeId' exact element={<SinglePlace />} />
        </Routes>
    </Router>

  );
}

export default App;
