import {
	Alert,
	AlertTitle,
	Button,
	ButtonGroup,
	Container,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import apiClient from "../../api/axiosIntercepter";
import { useState } from "react";

export default function About() {
	const [validationErrors, setValidationErrors] = useState<string[]>([]);

	function getValidationErrors() {
		apiClient.testErrors
			.getValidationErrors()
			.then()
			.catch((error) => setValidationErrors(error));
	}

	return (
		<>
			<Container>
				<Typography gutterBottom variant="h2">
					Errors for testing
				</Typography>
				<ButtonGroup fullWidth>
					<Button
						variant="contained"
						onClick={() =>
							apiClient.testErrors
								.get400Errors()
								.catch((error) => console.log(error))
						}
					>
						Test 400 Error
					</Button>
					<Button
						variant="contained"
						onClick={() =>
							apiClient.testErrors
								.get401Errors()
								.catch((error) => console.log(error))
						}
					>
						Test 401 Error
					</Button>
					<Button
						variant="contained"
						onClick={() =>
							apiClient.testErrors
								.get404Errors()
								.catch((error) => console.log(error))
						}
					>
						Test 404 Error
					</Button>
					<Button
						variant="contained"
						onClick={() =>
							apiClient.testErrors
								.get500Errors()
								.catch((error) => console.log(error))
						}
					>
						Test 500 Error
					</Button>
					<Button variant="contained" onClick={getValidationErrors}>
						Test Validation Error
					</Button>
				</ButtonGroup>
				{validationErrors.length > 0 && (
					<Alert severity="error">
						<AlertTitle>Validation Errors</AlertTitle>
						<List>
							{validationErrors.map((error) => (
								<ListItem key={error}>
									<ListItemText>{error}</ListItemText>
								</ListItem>
							))}
						</List>
					</Alert>
				)}
			</Container>
		</>
	);
}
