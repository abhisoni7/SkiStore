import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const paletteType = darkMode ? "dark" : "light";

	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === "dark" ? "#121212" : "#eeeeee",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<ToastContainer position="bottom-right" theme="colored" />
			<CssBaseline />
			<Header switchTheme={() => setDarkMode(!darkMode)} />
			<Container>
				<Outlet />
			</Container>
		</ThemeProvider>
	);
}

export default App;
