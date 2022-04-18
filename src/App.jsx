import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import ComingSoon from "pages/ComingSoonPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" element={<Homepage />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Switch>
  );
}
