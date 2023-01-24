import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

//make new page add components and render them as routes
function Pages() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				{/* /:type used to render out page even if there is extra text after /cuisine */}
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="/searched/:search" element={<Searched />} />
				<Route path="/recipe/:name" element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
}

export default Pages;
