import Image from "next/image";
import { FlagIcon, MagnifyingGlassCircleIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { HomeIcon} from '@heroicons/react/24/solid';
import HeaderIcon from '@/components/HeaderIcon.js'
import pny from "./pny.png"

function Header() {
  return (
<div className='sticky top-0 z-50 bg-white flex itemcs-center p-2 lg:px-5 shadow-md'>

{/*left*/}
  <div className="flex items-center">
    <Image 
          src={pny}
          width={40}
          height={40}
          alt={""}  />

  <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
      <MagnifyingGlassCircleIcon className="h-6 text-gray-500 flex-shrink" />
    <input 
    className='flex ml-2 items-center bg-transparent animate-pulse'
    type="text" 
    placeholder="Search ponyvil" />
  </div>


  </div>
    
    {/* center */}
    <div className="flex justify-center flex-grow">
      <div className='flex space-x-6 md:space-x-2'>
        <HeaderIcon active Icon={HomeIcon} poop={undefined}/>
        <HeaderIcon Icon={FlagIcon} active={undefined} poop={undefined} />
        <HeaderIcon Icon={PlayIcon} active={undefined} poop={undefined} />
        <HeaderIcon Icon={ShoppingCartIcon} active={undefined} poop={undefined} />
        <HeaderIcon Icon={UserGroupIcon} active={undefined} poop={undefined} />
      </div>
    </div>
  {/* right */}
  <div>

    <p className=''> User Name</p>


  </div>
</div>  );
}

export default Header
