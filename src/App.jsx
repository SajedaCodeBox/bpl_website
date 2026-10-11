
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPromise = async () => {
  const res = await fetch ("/data.json");
  return res.json();
}



function App() {
    const playerPromise = fetchPromise ();
    const [coin, setCoin] = useState(50000);


  return (
    <>
      
    <Navbar coin = {coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback = {<span className="loading loading-dots loading-lg"></span>}>
    <Players playerPromise = {playerPromise} coin = {coin} setCoin = {setCoin}></Players>
    </Suspense>
    <ToastContainer />
    </>
  )
}

export default App
