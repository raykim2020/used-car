import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../components/Nav/Nav'
function Show() {
    const { id } = useParams()
    const [show, setShow] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/listingItem/${id}`)
                setShow(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/listingItem/${id}`)
        } catch (err) {
            console.log()
        } finally {
            navigate(-1)
        }
    }

    return (
        <div className="showPage">

            <div className="taskContainer">
                <img src={show.img} />
                <main className='details'>
                    <h1>Make: {show.make}</h1>
                    <p className='listItem'>Model: {show.model}</p>
                    <p className='listItem'>Year: {show.year}</p>
                    <p className='listItem'>URL: {show.url}</p>
                    <p className='listItem'>Milage: {show.mileage}</p>
                    <p className='listItem'>Price: {show.price}</p>
                    <button className='listItem' onClick={handleDelete}>Delete  </button>
                </main>
            </div>
        </div>
    )
}

export default Show;

