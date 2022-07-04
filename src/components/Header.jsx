import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import logo from "../assets/statics/logo.png";
export default function Header() {
	return (
		<div>
			<header>
				<ul>
					<img className="logo" src={logo} alt="" />
					<h1 className="title">teoria de react - mica</h1>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/somos">Somos</Link>
					</li>
					<li>
						<Link to="/contacto">Contacto</Link>
					</li>
				</ul>
			</header>
		</div>
	);
}
