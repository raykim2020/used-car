import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from '../AboutPage/About';
import Nav from '../../components/Nav/Nav';
import { getUser } from '../../utilities/users-service';
import Shop from '../Shop/Shop';
import Cart from '../ShoppingCart/ShoppingCart';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ContactPage from '../ContactPage/ContactPage';
import NewListingPage from '../NewListingPage/NewListingPage';
import ListingItem from '../ListingItemPage/ListingItemPage'
import Listing from '../ListingPage/ListingPage'
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
// export default function App() {
//   const [user, setUser] = useState(getUser());
//   return (
//     <main className={styles.App}>
//       {user ?
//         <>
//           <Routes>
//             {/* client-side route that renders the component instance if the path matches the url in the address bar */}
//             <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
//             <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
//             {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
//             <Route path="/*" element={<Navigate to="/orders/new" />} />
//           </Routes>
//         </>
//         :
//         <AuthPage setUser={setUser} />
//       }
//     </main>
//   );
// }
export default function App() {
  const [user, setUser] = useState(getUser());
  const [shoppingCart, setShoppingCart] = useState([])
  function addItemToCart(item) {
    console.log('inside app.js', item)
    // ... is a spread operator which makes a shallow copy of an array
    // we are adding item at the end of the array
    setShoppingCart([...shoppingCart, item])

  }
  const [populatedUser, setPopulatedUser] = useState({})
  console.log(user)

  return (
    <div>
      {user ?
        <>
          <Nav user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars/listings" element={<Listing />} />
            <Route path="/cars/about" element={<AboutPage />} />
            <Route path="/cars/contact" element={<ContactPage />} />
            <Route path="/cars/:id" element={<ListingItem />} />
            <Route path="/cars/newlisting" element={<NewListingPage />} />
            <Route path="/cars/shop" element={<Shop user={user} />} />
            <Route path="/cars/orderhistory" element={<OrderHistoryPage user={user} />} />
            <Route path="/cars/shoppingcart" element={<Cart user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  )
}