import './card.css'

function Card({ id, thumbnail, title, description, price, discountPercentage, rating, stock, brand, category, handleAddPurchase }) {
    return (
        <>
            <li className={"card " + id } key={id} data-prod-id={id} data-brand={brand} data-category={category }> 
                <div className="card" key={id} >
                    <div className="image">
                    <img src={thumbnail} alt={'image of ' + title} className="product" />  
                    </div>
                    <div className="description">
                        <h4 className='title'>{title}</h4>
                        <p className="description">{description}</p>
                    </div>
                    <div className="horiz">
                        <div className="rating">{ rating + '/5 rating'}</div>
                        <div className="stock">{stock + ' in stock' }</div>
                    </div>
                    <div className="horiz">
                        <div className="discountPercentage">{ 'Save: ' + discountPercentage + '%' }</div>
                        <div className="quantity">
                            Qty: <input type="number" className="quantity" defaultValue="1" min={1}/>
                        </div>
                        <div className="price">${ price }</div>
                    </div>
                    <button className="addCart" data-prod-id={id}  onClick={ (evt) => { handleAddPurchase(evt) } }>Buy Me!</button>
                </div>
            </li>
        </>
    )
} 

export default Card

// "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",