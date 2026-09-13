import Header from './Components/Header'
import './App.css'
import Banner from './Components/Banner'
import { Footer } from './Components/Footer'
import type { TechnologyType } from './TechnologyType'
import TechnologiesSection from './Components/Technologies'
import { Suspense } from 'react'
import { ToastContainer } from "react-toastify";
function App() {
 
  const TechnologiesProps= async():Promise<TechnologyType[]>=>{
   const res= await fetch("/Data.json");
   const data = await res.json();
   return data;
  }



  return (
    <>
     <Header />
     <Banner />
     <Suspense fallback={<h2>Loading....</h2>}>
     <TechnologiesSection TechnologiesProp={TechnologiesProps()} />
     </Suspense>
     <Footer />
       <ToastContainer position='top-left'/>
    </>
  )
}

export default App
