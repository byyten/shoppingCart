
import './checkout.css'

function Checkout({ purchases, handleAlterPurchase, handleDelPurchase, tax, total }) {  
    return (
        <>
            <section>
                <ul className="purchases">
                    { purchases.map(product => {
                        return (
                            <li className="purchase" key={ product.id }>
                                <div className="listProduct"  key={ product.id }>
                                    <button data-prod-id={ product.id } onClick={ (evt) => { handleDelPurchase(evt)  }}>
                                        <span className="material-symbols-outlined">
                                            remove
                                        </span>
                                    </button>
                                    <div className="image">
                                    <img src={product.thumbnail} alt={ product.title } className="checkout" />
                                    </div>
                                    
                                    <div className="content">
                                        <div className="updown">
                                            <div>{ product.title}</div>
                                            <div className="discountPercent">Discounted { product.discountPercentage }% </div>
                                        </div>
                                        <div className="price">
                                            ${ product.price }
                                        </div>
                                        <div className="quantity">
                                            <input type="number" className="quantity" value={ product.quantity } min="1"
                                            data-prod-id={ product.id } onChange={ (evt) => { 
                                                handleAlterPurchase({ id: product.id, quantity: evt.target.value }) 
                                            } }/>
                                        </div>
                                        <div className="subtotal">
                                            ${ product.price * product.quantity }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }) }
                </ul>

                <div className="summation">
                        <div className="right">
                            <div className="horiz">
                                <div className="label">Sales Tax:</div>
                                <div className="tax">${tax}</div>
                            </div>
                            <div className="horiz">
                                <div className="label">Total:</div>
                                <div className="total">${total}</div>
                            </div>    
                        </div>
                                      
                </div>
            </section>
        </>
    )
}

export default  Checkout 