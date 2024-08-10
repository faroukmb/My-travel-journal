
import './App.css'
import Navbar from '../navbar'
import Cart from './Cart'
import data from './data'
function App() {
 const carts= data.map( item =>{ return (<Cart key={item.id} {...item} />)}  )

  return (
    <div className='app'>
    <Navbar/>
    {carts}
    </div>
  )
}

export default App
