import Nav from "../components/Nav";
import "../styles/globals.css";

// modify the MyApp component to keep global state
// or put components here that are the same for every page
function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* Navbar will be present on all pages now */}
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
