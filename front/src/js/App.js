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

function App() {
  return <Router>
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
