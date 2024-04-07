import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";


export function App() {
  return (
    <Router>
      <>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/dashboard" element={<Admin/>}>
         <Route path="users" element={<Users/>}/>
         <Route path="messages" element={<Messages/>}/>
         </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
