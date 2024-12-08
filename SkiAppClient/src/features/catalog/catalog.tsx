import apiClient from "../../api/axiosIntercepter";
import Loader from "../../app/layout/Loader";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		apiClient.catalog
			.list()
			.then((products) => setProducts(products))
			.catch()
			.finally(() => setLoading(false));
	}, []);
	// adding an empty array of dependencies is important to not endlessly re-render component

	if (loading) {
		return <Loader message="Loading Products..." />;
	}

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
