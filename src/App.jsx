import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LibraryPage from "./components/pages/LibraryPage";
import MainPage from "./components/pages/MainPage";
import SpecificMoviePage from "./components/pages/SpecificMoviePage";
import "./styles/App.css"

function App() {
	return (
		<div className="app">
			<Navbar />
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/library" element={<LibraryPage />}></Route>
					<Route path="/library/:movieID" element={<SpecificMoviePage />}></Route>
				</Routes>
			<Footer />
		</div>
	);
}

export default App;
