import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Favorites } from './pages/Favorites';
import { HomePage } from './pages/HomePage';
import { addMessage, addNewMessages } from './redux/messageSlice';


function App() {
  
  const dispatch:any = useDispatch()
  const idLastMessage = useSelector((state:any)=> state.messages.idLastMessage)  
  useEffect(() => {
    axios({
        method: "post",
        url: "http://f0665380.xsph.ru/",
        data: {
          'actionName':'MessagesLoad',
          'messageId': '0',
        },
        headers: { "Content-Type": "multipart/form-data" },
      }).then((data:any)=>{     
           
        dispatch(addMessage(data.data.Messages))
 })  
   }, [])



  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<div className='main'><Header /><HomePage /><Footer /></div>} />
            <Route path="/favorites" element={<div className='main'><Header /><Favorites /><Footer /></div>} />
      </Routes>
    </div>
  );
}

export default App;
