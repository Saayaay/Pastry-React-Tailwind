import Dessert from '../assets/dessert.jpg';
import PainsAuChocolat from '../assets/painsAuChocolat.jpg';
import DoughBread from '../assets/doughBread.jpg';
import Muffins from '../assets/muffins.jpg';
import RouleauxAuChoc from '../assets/rouleauxAuxChoc.jpg';
 
const Selects = () => {
   return (
     <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cold-3 gap-4">
        
        <div className="relative">
            <img src={Dessert} alt="/" />
            <div className='bg-gray-900/30'>
                <p className='left-4 bottom-4 text-xl text-white absolute'>Bouchées à la Reine</p>
            </div>
        </div>

     </div>
   )
 }
 
 export default Selects 