import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch("http://localhost:5111/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch();
	}, []);
	// adding an empty array of dependencies is important to not endlessly re-render component

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
