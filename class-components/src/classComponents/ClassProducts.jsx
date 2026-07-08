

import React from "react";

class ProductList extends React.Component{
    render(){
        return(
            <>
                <h2>Title : {this.props.name}</h2>
                <h2>Price : {this.props.price}</h2>
            </>
        )
    }
}

export default ProductList