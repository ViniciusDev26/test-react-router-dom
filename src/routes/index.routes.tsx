import {
  BrowserRouter,
  Routes as Router,
  Route,
} from "react-router-dom";
import App from "../App";
import { Details } from "../pages/Details";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<App />} />
        <Route path="/student/:id" element={<Details />}/>
        <Route path="/protected/:id" element={<Details />}/>
        <Route path="*" element={<App />}/>
      </Router>
    </BrowserRouter>
  )
}