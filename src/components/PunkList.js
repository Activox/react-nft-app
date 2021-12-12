import React from 'react'
import CollectionCard from './CollectionCard'
import './punkList.css'
const PunkList = ({punkListData, selectedPunk}) => {
    return (
        <div className='punkList'>
            {
                punkListData.map(punk => (
                    <div onClick={() => selectedPunk(punk.token_id)} key={punk.token_id}>
                        <CollectionCard 
                            id={punk.id} 
                            name={punk.name} 
                            traits={punk.traits} 
                            image={punk.image_original_url}
                        />
                    </div>
                ))
            }
        </div>
    )
} 

export default PunkList
