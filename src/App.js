import styled from "@emotion/styled";
import Songs from "./lists/Songs";
import CreateNew from "./changer/CreateNew";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./changer/update";
import Playere from "./lists/playere";

function App() {
  const Mdiv = styled.div`
    height: 990px;
    background-image: linear-gradient(
      to right,
      white,
      grey,
      white,
      LightGreen,
      white
    );
    @media (max-width: 750) {
      height: 1200px;
    }
  `;

  return (
    <Mdiv>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/song" element={<Songs />}></Route>
            <Route path="/create" element={<CreateNew />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/" element={<Playere />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Mdiv>
  );
}
export default App;
