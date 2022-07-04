import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/App.css";
import Somos from "../containers/Somos";
import Contacto from "../containers/Contacto";
import Home from "../containers/Home";
import Layout from "../components/Layout";
export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="somos" element={<Somos />}></Route>
						<Route exact path="contacto" element={<Contacto />}></Route>
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}
