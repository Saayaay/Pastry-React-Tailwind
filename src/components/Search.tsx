import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>GÂTEAUX D'ANNIVERSAIRE ET AUTRES EVENEMENTS</h2>
                <p className='py-4'>Vous êtes à la recherche d'un bon 
                   gâteau à apprécier avec toute la famille pour fêter 
                   une joyeuse fêtes d'anniversaire ? Venez choisir parmi 
                   une sélection de gâteaux celui qui vous fera plaisir. </p>
            </div>
            <div className='grid sm:grid-col-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-rox items-center text-center'>
                    <button>
                    <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>SERVICE</h3>
                        <p className='py-1'>TOUS NOS GATEAUX DISPONIBLES EN MOINS DE 24H</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-rox items-center text-center'>
                    <button>
                    <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>SERVICE</h3>
                        <p className='py-1'>TOUS NOS GATEAUX DISPONIBLES EN MOINS DE 24H</p>
                    </div>
                </div>
            </div>
        </div>
        <div>right</div>
    </div>
  )
}

export default Search