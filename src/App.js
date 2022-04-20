import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import SharePage from "./SharePage";

export default function App() {
  return (
        <Routes>
          <Route  exact path='/' element={<Home/>} />
          <Route exact path="/Share" element={<SharePage/>}/>
        </Routes>
  );
}