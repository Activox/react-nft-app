import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(()=>{
    const getMyNfts = async ()=>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x1A426Ea7E1656B89C6d5C94E063619BC3347A05D')
      setPunkListData(openSeaData.data.assets)
    }
    return getMyNfts()
  },[])
  
  return <div className='app'>
    <Header />
    {
      punkListData.length > 0 && (
        <div>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>  
          <PunkList punkListData={punkListData} selectedPunk={setSelectedPunk} />
        </div>
      )
    }
   
   
  </div>
}
export default App;
