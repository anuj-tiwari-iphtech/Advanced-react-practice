

import { useState, useEffect } from "react";
import axios from "axios"

function FetchProduct(){

    const[product, setProduct] = useState([])
    const[loading, setLoading] = useState("")

    useEffect(() => {
        handleProduct()
    },[])

    const handleProduct = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products")

            setProduct(response.data)
        }catch (err){
            console.log("Erroe found")
        } finally{
            setLoading(false)
        }

    }

    if(loading) return <h2>loading......</h2>

    return(
        <div>
            <h3>Products</h3>

            {product.map((product)=> (
                <div key={product.id}
                style={{
                    border: "1px solid black",
                    margin: "20px",
                    padding: "15px",
                  }}
                >
                <img
                    src={product.image}
                    width="120"
                    height="120"
                    alt={product.title}
                />
                <h4>{product.title}</h4>

                <p>{product.price}</p>
                <p>{product.category}</p>
            </div>
            ))}
        </div>
    )
}

export default FetchProduct