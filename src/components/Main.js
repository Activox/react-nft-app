import React from 'react'
import instagramLogo  from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
const Main = ({punkListData, selectedPunk}) => {

    const activePunk = punkListData[selectedPunk]

    return (
        <div className='main' >
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img 
                            className='selectedPunk' 
                            src={activePunk.image_original_url}
                            alt=''
                        />
                    </div>
                </div>
                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                    <span className='itemNumber'>#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.image_original_url} alt=''/>
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div style={{color: 'white'}} >{activePunk.owner.address}</div>
                            <div className='ownerHandle'>{'@pottenwalder'}</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=""/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
