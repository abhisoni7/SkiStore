import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface loaderprops {
	message?: string;
}

export default function Loader({ message = "Loading..." }: loaderprops) {
	return (
		<>
			<Backdrop open={true}>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<CircularProgress size={50} color="secondary" />
					<Typography
						variant="h4"
						sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
					>
						{message}
					</Typography>
				</Box>
			</Backdrop>
		</>
	);
}
