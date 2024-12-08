import {
	Divider,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import apiClient from "../../api/axiosIntercepter";
import { AxiosError } from "axios";
import Loader from "../../app/layout/Loader";

export default function ProductDetails() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			apiClient.catalog
				.details(parseInt(id))
				.then((response) => setProduct(response))
				.catch((error: AxiosError) => console.log(error.response))
				.finally(() => setLoading(false));
		}
	}, [id]);

	if (loading) {
		return <Loader message="Loading product..." />;
	}

	if (!product) {
		return <h3>Product Not Found...</h3>;
	}

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={6}>
					<img
						src={product.pictureUrl}
						alt={product.name}
						style={{ width: "100%" }}
					></img>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h4">{product.name}</Typography>
					<Divider sx={{ mb: 2 }} />
					<Typography variant="h5">
						${(product.price / 100).toFixed(2)}
					</Typography>
					<TableContainer>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{product.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Type</TableCell>
									<TableCell>{product.type}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Brand</TableCell>
									<TableCell>{product.brand}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Quantity Available</TableCell>
									<TableCell>{product.quantityInStock}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</>
	);
}
