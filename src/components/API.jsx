import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const API = () => {
    const [apiData, setApiData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(data => data.json())
      .then(res => setApiData(res.splice(0,10))) 
    }, [])
    
      

  return (
    <div className='margin'>
    <div className='box scroll-container'>
    {apiData.map((res, index) => 
    <div className='cart' key={index}>
    <img style={{width: "150px"}} src={res.url}/>
    <p>{res.title.split(' ').length <= 7 ? res.title : null}</p>
    <Modal>
        <img style={{width: "150px"}} src={res.url}/>
    </Modal>
    </div>
    )}
    </div>
    </div>
  )
}

export default API