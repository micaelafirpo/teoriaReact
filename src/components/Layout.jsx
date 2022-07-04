import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
export default function Layout(props) {
	const { children } = props;
	return (
		<div>
			<Header></Header>
			{children}
			<Footer></Footer>
		</div>
	);
}
