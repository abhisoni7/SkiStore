import Catalog from "../../features/catalog/catalog";
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";

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
			<div>
				<CssBaseline />
				<Header switchTheme={() => setDarkMode(!darkMode)} />
				<Container>
					<Catalog />
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
