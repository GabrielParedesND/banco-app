'use client'

import React, { useState } from 'react'

function FormTransaction() {
  const [validateForm, setValidateForm] = useState(false);
  const [form, setForm] = useState({
    accountFrom: '',
    accountTo: '',
    amount: '',
    description: '',
  });

  const handleInputChange = (input, value) => {

    console.log(`Input changed: ${input} = ${value}`);

    setForm({
      ...form,
      [input]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);
    console.log("Transferencia lista");
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4"
    >



      <select
        value={form.accountFrom}
        onChange={(e) => handleInputChange('accountFrom', e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Selecciona la cuenta / tarjeta</option>
        <option value="1">Cuenta corriente - 1234567890</option>
        <option value="2">Cuenta ahorro - 0987654321</option>
        <option value="3">Tarjeta de crédito - **** **** **** 1234</option>
      </select>

      <input
        type="number"
        placeholder="Número de cuenta / Tarjeta"
        value={form.accountTo}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => handleInputChange('accountTo', e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto a transferir"
        value={form.amount}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

        onChange={(e) => handleInputChange('amount', e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={form.description}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

        onChange={(e) => handleInputChange('description', e.target.value)}
      />

      <button
        className={`rounded-xl cursor-pointer transition p-3 ${validateForm === 'cuentas' ? 'bg-[#77308A] text-white' : 'bg-gray-200 text-black'}`}
        onClick={() => handleTabClick('cuentas')}
      >
        Confirmar
      </button>


    </form>
  )
}

export default FormTransaction