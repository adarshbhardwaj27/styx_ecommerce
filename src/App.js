// import { createContext, useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductList from './components/ProdPage/ProductList';
// import Cart from './components/CartPage/Cart';

// export const CartContext = createContext();

// function App() {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // for adding products to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex(item => item.id === product.id);
//       if (itemIndex === -1) {
//         // Product is not in the cart, add it
//         return [...prevItems, { ...product, quantity: 1 }];
//       } else {
//         // Product is already in the cart, update quantity
//         const newItems = [...prevItems];
//         newItems[itemIndex] = {
//           ...newItems[itemIndex],
//           quantity: newItems[itemIndex].quantity + 1
//         };
//         console.log(newItems);
//         return newItems;
//       }
//     });
//   };

//   // for removing product from the cart
//   const removeFromCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex(item => item.id === product.id);
//       if (itemIndex === -1) return prevItems;

//       const item = prevItems[itemIndex];
//       if (item.quantity > 1) {
//         const newItems = [...prevItems];
//         newItems[itemIndex] = {
//           ...item,
//           quantity: item.quantity - 1
//         };
//         return newItems;
//       } else {
//         return prevItems.filter((_, index) => index !== itemIndex);
//       }
//     });
//   };

//   return (
//     <>
//       <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
//         <Router>
//           <Header />
//           <Routes>
//             <Route path="/" element={<ProductList />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </CartContext.Provider>
//     </>
//   );
// }

// export default App;


import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './components/ProdPage/ProductList';
import Cart from './components/CartPage/Cart';

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  // for adding products to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex === -1) {
        // Product is not in the cart, add it
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        // Product is already in the cart, update quantity
        const newItems = [...prevItems];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + 1
        };
        console.log(newItems);
        return newItems;
      }
    });

  };
  // for removing product from the cart
  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex === -1) return prevItems;

      const item = prevItems[itemIndex];
      if (item.quantity > 1) {
        const newItems = [...prevItems];
        newItems[itemIndex] = {
          ...item,
          quantity: item.quantity - 1
        };
        return newItems;
      } else {
        return prevItems.filter((_, index) => index !== itemIndex);
      }
    });
  };
  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
