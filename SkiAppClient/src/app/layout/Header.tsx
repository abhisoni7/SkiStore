import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface headerProps {
  switchTheme : () => void,
}

export default function Header({ switchTheme } : headerProps ) {
	return (
		<>
			<AppBar position="static" sx={{ mb: 4 }}>
				<Toolbar>
					<Typography variant="h5">Ski Skop</Typography>
          <Switch onChange={switchTheme}/>
				</Toolbar>
			</AppBar>
		</>
	);
}
