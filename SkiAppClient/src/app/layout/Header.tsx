import { ShoppingCart } from "@mui/icons-material";
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	List,
	ListItem,
	Switch,
	Toolbar,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface headerProps {
	switchTheme: () => void;
}

const navlinks = [
	{ title: "catalog", path: "/catalog" },
	{ title: "about", path: "/about" },
	{ title: "contact", path: "/contact" },
];

const authLink = [
	{ title: "login", path: "/login" },
	{ title: "signin", path: "/signin" },
];

const navstyles = {
	color: "inherit",
	textDecoration: "none",
	typography: "h6",
	"&:hover": { color: "primary.light" },
	"&.active": { color: "text.secondary" },
};

export default function Header({ switchTheme }: headerProps) {
	return (
		<>
			<AppBar position="static" sx={{ mb: 4 }}>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box display="flex" alignItems="center">
						<Typography variant="h5" component={NavLink} to="/" sx={navstyles}>
							SKI SHOP
						</Typography>
						<Switch onChange={switchTheme} />
					</Box>
					<Box>
						<List sx={{ display: "flex" }}>
							{navlinks.map(({ title, path }) => (
								<ListItem
									component={NavLink}
									to={path}
									key={path}
									sx={navstyles}
								>
									{title.toUpperCase()}
								</ListItem>
							))}
						</List>
					</Box>
					<Box display="flex" alignItems="center">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							sx={{ mr: 2 }}
						>
							<Badge badgeContent="4" color="secondary">
								<ShoppingCart />
							</Badge>
						</IconButton>

						<List sx={{ display: "flex" }}>
							{authLink.map(({ title, path }) => (
								<ListItem
									component={NavLink}
									to={path}
									key={path}
									sx={navstyles}
								>
									{title.toUpperCase()}
								</ListItem>
							))}
						</List>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}
