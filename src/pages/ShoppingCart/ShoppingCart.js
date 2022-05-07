import * as itemsApi from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import * as usersAPI from '../../utilities/users-api'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart({ user }) {
    const navigate = useNavigate()

    const [populatedUser, setPopulatedUser] = useState('')
    useEffect(() => {
        (async () => {
            try {
                const response = await usersAPI.getLogin(user._id)
                setPopulatedUser(response)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    console.log(populatedUser)
    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`http://localhost:3000/api/listingItem/${id}`)
    //     } catch (err) {
    //         console.log()
    //     } finally {
    //         navigate(-1)
    //     }
    // }


    return (
        <main>
            <h1>Shopping Cart</h1>
            <div className='cart'>
                {
                    populatedUser && populatedUser.foundUsers.shoppingCart.map((listing) => (
                        <div className='cartItem'>
                            <img src={listing.img} />
                            <p>{listing.name}</p>
                            <p>{listing.price}</p>

                        </div>

                    ))
                }
            </div>

        </main>
    )
}

// import * as shopApi from '../../utilities/items-api'
// import * as orderApi from '../../utilities/orders-api'

// import { useEffect, useState } from 'react'
// import Nav from '../../components/Nav/Nav'

// export default function NewOrderPage({ user }) {
//     const [shops, setShops] = useState([])

//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await shopApi.getAll()
//                 setShops(response)
//             } catch (err) {
//                 console.log(err)
//             }
//         })()
//     }, [])
//     console.log(shops)
//     const addToCart = async (userId, itemId) => {
//         const itemAddedToCart = await orderApi.addToCart(userId, itemId)
//         console.log(itemAddedToCart)
//     }
//     console.log('Hey we are here!')
//     return (
//         <main className='listing-page'>

//             <h1>All Listings</h1>
//             {
//                 shops.map((shop) => (
//                     <div className='listing'>
//                         <img className='listing-img' src={shop.name} />
//                         <p>{shop.price}</p>
//                         <button className='submit' onClick={() => addToCart(user._id, shop._id)}>Add to cart</button>
//                     </div>
//                 ))
//             }
//         </main>
//     )