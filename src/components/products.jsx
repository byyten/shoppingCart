import './products.css'
import { useState } from 'react'
import  Card  from './card'

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
    
// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);
    

// export default 
function Products({ inventory, handleAddPurchase }) {
  const [products, setProducts] = useState(inventory)

  return (
            <>
                <ul className="productsList">
                    { products.map(product => {
                        return (
                            <Card 
                                id={ product.id }
                                thumbnail={ product.thumbnail }
                                title= { product.title }
                                description = { product.description }
                                price = { product.price }
                                stock={ product.stock }
                                rating = { product.rating }
                                discountPercentage={ product.discountPercentage }
                                brand={ product.brand }
                                category={ product.category }
                                handleAddPurchase = { handleAddPurchase }
                            />
                        )
                    })}
                </ul>
                
            </>
        )
    }

    export default  Products 