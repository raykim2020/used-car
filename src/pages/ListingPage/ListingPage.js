import * as listingApi from '../../utilities/listing-api'
import { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
export default function ListingPage() {

    const [listings, setListings] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await listingApi.getAll()
                setListings(response)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <main className='listing-page'>

            <h1 className='listingTitle'>All Listings</h1>
            <div className='listing'>
                {
                    listings.map((listing) => (
                        <a href={`/cars/${listing._id}`}>
                            <main >
                                <img className='listing-img' src={listing.img} />
                                <p>{listing.make}</p>
                                <p>{listing.model}</p>
                            </main>
                        </a>

                    ))
                }
            </div>
        </main>
    )
}