import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "@/pages/home";
import Services from "@/pages/services";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Services />} />
		</Routes>
	);
};

export default AppRoutes;
