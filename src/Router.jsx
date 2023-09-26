import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
import ErrorPage from "./components/error";
import Checkout from './components/checkout'
import Products from './components/products'
import inventory from './assets/inventory'

const Router = () => {
    const [products, setProducts] = useState([])
    const [purchases, setPurchases] = useState([])
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)
    
    function handleAddPurchase(evt) {
      let id = Number(evt.target.getAttribute('data-prod-id'))
      let _purchase = products.find(product => product.id === id)
      _purchase.quantity = Number(evt.target.parentNode.querySelector('input.quantity').value)
      setPurchases([...purchases, _purchase])    
      calcPurchases()
    }
    
    function handleAlterPurchase(evt) {
      let id = evt.id // Number(evt.target.getAttribute('data-prod-id'))
      let purchaseIdx = purchases.findIndex(product => product.id === id)
      let _purchases = purchases.slice(0) 
      _purchases[purchaseIdx].quantity = Number(evt.quantity) // Number(evt.target.querySelector('input.quantity').value)

        console.log(_purchases[purchaseIdx].quantity)
      setPurchases([..._purchases])
      console.log(purchases)
      
      calcPurchases()

    }
    
    function handleDelPurchase(evt) {
      let id = Number(evt.target.getAttribute('data-prod-id'))
      setPurchases(purchases.filter(purchase => purchase.id !== id))
      calcPurchases()
    }
  
    function calcPurchases() {
      let _purchasesTotal = purchases.reduce((last, next) => last + (next.price * next.quantity) , 0 )   
      let _tax = _purchasesTotal * 0.175
      let _total = _tax + _purchasesTotal
      setTax(Number(_tax.toFixed(2)))
      setTotal(Number(_total.toFixed(2)))
    }

    useEffect( () => {

      async function getData() {
        try {
          const respProducts = await fetch('https://dummyjson.com/products')
          // console.log('useEffect: respProducts')
          // console.log(respProducts)
          try {
            const resJson = await respProducts.json()
            // console.log('useEffect: resJson')
            // console.log(resJson)
              setProducts(resJson.products)  
          } catch (err) {
            console.log(err.message)
          }
        } catch (err) {
          console.log(err.message)
        }
      }
      getData()
    }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    
      children: [
        {
          path: '/',
          element: <Products 
            inventory = { inventory }
            handleAddPurchase = { handleAddPurchase }
          />
        },
        {
          path: '/checkout',
          element: <Checkout  
            purchases = { purchases }
            handleAlterPurchase = { handleAlterPurchase }
            handleDelPurchase = { handleDelPurchase }
            tax = {tax}
            total={total}
          />,
          
        }]
      }]
    );

  return <RouterProvider router={router} />;
};

export default Router;