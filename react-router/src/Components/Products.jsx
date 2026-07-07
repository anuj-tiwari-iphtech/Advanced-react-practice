import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return (
    <div>
      <h1>Products Page</h1>
      <h2>Category: {category || "All Products"}</h2>
    </div>
  );
}

export default Products;