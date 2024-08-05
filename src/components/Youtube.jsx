import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'

const Youtube = () => {

    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB84ws_i-RWF4zDYWaX9Xo9lfCuXJZhGFY&part=snippet'



    const [data, setData] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        async function fetchvideo() {

            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setSearch(data.items)
        }
        fetchvideo();
    }, []);


    const handleclick = async () => {
        const url2 = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB84ws_i-RWF4zDYWaX9Xo9lfCuXJZhGFY&part=snippet&s=${search}`
        const sear = await fetch(url)
        const sear2 = await sear.json()
        console.log(sear2)
        setData(sear2.items)
    }


    return (

        <div>

            <nav className='Nav'>

                <div className='inline'>


                    <i class="fa-solid fa-bars" ></i>

                    <img src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="" className='img' />

                    <input type="text" style={{ border: "1px solid black" }} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='search' />

                    <button onClick={handleclick}><i class="fa-solid fa-magnifying-glass"></i></button>

                    <div className='micro'>
                        <i class="fa-solid fa-microphone"></i>
                    </div>

                    <ul className='flex'>
                        <i class="fa-regular fa-square-plus"></i>
                        <i class="fa-regular fa-bell"></i>
                        <img src="public\1000002252.jpg" alt="" />
                    </ul>

                </div>

            </nav>


            <div className='flexx'>
                <Sidebar />

                <div className='map'> 

                    {data.map((pack) => {

                        const { snippet } = pack

                        return (

                            <>
                            <div className='Card'>

                            <img src={snippet.thumbnails.medium.url} alt="" />
                                <h2>{snippet.channelTitle}</h2>
                                <p>{snippet.description}</p>

                            </div>
                                
                            </>

                        )

                    })}


                </div>
            </div>



        </div>


    )
}

export default Youtube
