// import react router dom 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dessert from '../assets/dessert.jpg';
import PainsAuChocolat from '../assets/painsAuChocolat.jpg';
import DoughBread from '../assets/doughBread.jpg';
import Muffins from '../assets/muffins.jpg';
import RouleauxAuChoc from '../assets/rouleauxAuxChoc.jpg';


const Pastries = () => {
  return (
    <div className="maw-w-[1240px] mx-auto py-16 text-center">
      <h1>Toutes sortes de patisseries</h1>
      <p className='py-4'>Pour toutes sortes d'événements</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Dessert} alt="/" />
          <img className='w-full h-full object-cover' src={PainsAuChocolat} alt="/" />
          <img className='w-full h-full object-cover' src={RouleauxAuChoc} alt="/" />
          <img className='w-full h-full object-cover' src={DoughBread} alt="/" />
          <img className='w-full h-full object-cover' src={Muffins} alt="/" />
      </div>
    </div>
  )
}

export default Pastries