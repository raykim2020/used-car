import * as listingApi from '../../utilities/listing-api'
import { useEffect, useState } from 'react'

export default function HomePage() {
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
        <div className="homePage">
            <div className='home'>
                <img className="indeximg" src="https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg" alt="" />
                <p className='indexdescription'>At Used Car Links we want to connect people with a database of used cars they may want to purchase. Our services are open to any <br />
                    and everyone. We want people to feel that shopping for their next used car was easy. The best thing about it is that we open our site to all car enthusiasts <br />
                    and invite anyone to share their findings on awesome car deals.</p>
            </div>
            <div className='listing-content'>
                <a href="/cars/newlisting">Input a New Car Listing</a>
                <div className="index">
                    {
                        listings && listings.map((listing) => (
                            <article className='individual'>
                                <a href={`/cars/${listing._id}`}>
                                    <img className="listing-img" src={listing.img} alt="" />
                                    <h2>
                                        {listing.make}
                                    </h2>
                                </a>
                            </article>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}



