
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
// import { incNumber,decNumber } from './Actions/Info';
import { ChangeDark } from './Actions/Info';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';


function App() {
  // const myState=useSelector((state)=>state.changeTheNumber)
  const changeThemeApp=useSelector((state)=>state.darkReducer)
  const dispatch=useDispatch()
  return (
    <div className="App" style={{
      backgroundColor: `${changeThemeApp ? "black" : "white"}`,
      color: `${changeThemeApp ? "white" : "black"}`,
    }}>
      <p>Geekster</p>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
     <button onClick={()=>dispatch(ChangeDark())}>Change The Theme</button>
    </div>
  );
}

export default App;