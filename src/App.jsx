import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className="shop">
        <header>
          <div className="headline">
            <div className="title">ConsumerMax</div>
          </div>
          <nav>
            <Link to="/" >
              <span className="material-symbols-outlined">devices_wearables</span>
              <span className="icon_label">  Products</span> 
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/checkout" >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="icon_label">  Checkout</span>
            </Link>
          </nav>
        </header>
        <div className="body">
          <Outlet />  
        </div>
        <footer>
          <div className="shopname">ConsumerMax &copy; { new Date().getFullYear() }</div>
        </footer>
      </div>
    </>
  )
}

export default App
