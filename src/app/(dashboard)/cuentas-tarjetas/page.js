'use client'

import { useState } from 'react'
import CuentasPage from './partials/CuentasPage';
import TarjetasPage from './partials/TarjetasPage';

const CuentasTarjetasPage = () => {
  const [selectedTab, setSelectedTab] = useState('cuentas');


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-4 mt-3 mb-5'>
        <button
          className={`rounded-xl cursor-pointer transition p-3 ${selectedTab === 'cuentas' ? 'bg-[#77308A] text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleTabClick('cuentas')}
        >
          Cuentas
        </button>
        <button
          className={`rounded-xl cursor-pointer transition p-3 ${selectedTab === 'tarjetas' ? 'bg-[#77308A] text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleTabClick('tarjetas')}
        >
          Tarjetas
        </button>
      </div>

      {selectedTab === 'cuentas' ? (
        <CuentasPage />
      ) : (
        <TarjetasPage />
      )}
    </div>
  )
}

export default CuentasTarjetasPage