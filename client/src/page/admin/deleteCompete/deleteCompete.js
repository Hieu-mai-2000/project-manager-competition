import React, { useEffect, useState } from 'react'
import competeApi from '../../../api/competeApi'


const DeleteCompete = (props) => {

    const [id ,setId] = useState(0)

    useEffect(()=>{
        async function deleteItem(){
            
            
        }
        setId(props.id)
        deleteItem()
    },[props.id,id])

    return (
        <></>
    )
}

export default DeleteCompete
