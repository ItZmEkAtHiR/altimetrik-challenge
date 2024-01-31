import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

type NavType = {label: string; link: string};

const navItems: Array<NavType> = [
	{label: "Logo", link: ""},
	{label: "Home", link: ""},
	{label: "Services", link: "/services"},
	{label: "Gallery", link: ""},
	{label: "Contact Us", link: ""},
];

const Header: React.FC = () => {
	return (
		<nav className="navWrapper">
			<ul className="navItems">
				{navItems.map((item) => (
					<Link to={item?.link} key={item?.label}>
						<li>{item?.label}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Header;
