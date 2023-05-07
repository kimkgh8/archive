import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Record from "./components/Record";
import RecordModify from "./components/RecordModify";
import RecordDetail from "./components/RecordDetail";
import Sidebar from "./components/Sidebar";
import Navigationbar from "./components/Navigationbar";

function App() {
  return <Router>
		{window.location.pathname === "/" || window.location.pathname === "/login" ? null : <Navigationbar />}
		{window.location.pathname === "/" || window.location.pathname === "/login" ? null : <Sidebar />}
		<Routes>
			<Route path="/" element={ <Login />} />
			<Route path="/login" element={ <Login />} />
			<Route path="/dashboard" element={ <Dashboard />} />
			<Route path="/record" element={ <Record />} />
			<Route path="/record/modify/:id" element={ <RecordModify />} />
			<Route path="/record/detail/:id" element={ <RecordDetail />} />
		</Routes>
	</Router>;
}

export default App;
