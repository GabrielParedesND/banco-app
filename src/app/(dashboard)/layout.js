import Image from 'next/image'
import { FaBell } from "react-icons/fa6";


const Layout = ({ children }) => {
  return (
    <div>

      <div className='flex items-center justify-between p-4 text-white font-bold bg-[#77308A]'>
        <div className='flex items-center gap-2'>
          <Image
            className='w-10 h-10 rounded-full'
            src="/assets/avatar.png"
            width={40}
            height={40}
            alt="Rounded avatar"
          />

          <h1>Hola, Gabriel Paredes</h1>
        </div>

        <FaBell size={24} />

      </div>

      <div className='mx-auto dashboard-layout'>
        {children}
      </div>
    </div>
  )
}

export default Layout