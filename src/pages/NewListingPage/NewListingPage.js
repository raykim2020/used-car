
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Nav from '../../components/Nav/Nav'
export default function NewListingPage() {
    const make = useRef(null)
    const model = useRef(null)
    const year = useRef(null)
    const url = useRef(null)
    const img = useRef(null)
    const mileage = useRef(null)
    const price = useRef(null)
    const [didSubmit, setDidSubmit] = useState(false)
    const handleSubmit = async (evt) => {
        evt.preventDefault()

        try {
            await axios.post('http://localhost:3000/api/listingItem', {
                make: make.current.value,
                year: year.current.value,
                model: model.current.value,
                url: url.current.value,
                img: img.current.value,
                mileage: mileage.current.value,
                price: price.current.value,
            })
            setDidSubmit(!didSubmit)
            make.current.value = ""
            year.current.value = ""
            model.current.value = ""
            url.current.value = ""
            img.current.value = ""
            mileage.current.value = ""
            price.current.value = ""
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <div className='newListing'>

            <div className="formContainer">
                <form className="form" onSubmit={handleSubmit}>
                    <label>Make: <input ref={make} type="text" /></label>
                    <label>Model:<input ref={model} type="text" /></label>
                    <label>Year: <input ref={year} type="text" /></label>
                    <label>URL: <input ref={url} type="text" /></label>
                    <label>Image: <input ref={img} type="text" /></label>
                    <label>Mileage: <input ref={mileage} type="text" /></label>
                    <label>Price: <input ref={price} type="text" /></label>

                    <button className='submit' >Add a New Listing</button>
                </form>
            </div>
        </div>
    )
}