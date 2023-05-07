import { React } from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";
function Sidebar() {
	const items = [
		{ name: "dashboard", path: "/dashboard"},
		{ name: "record", path: "/record"},
	]

	return (
		<div className="side-bar">
			{items.map((item, index) => {
				return (
					<Link to={item.path} key={index}>
						<SidebarItem menu={item} />
					</Link>
				);
			})}
		</div>
	);
}

export default Sidebar;