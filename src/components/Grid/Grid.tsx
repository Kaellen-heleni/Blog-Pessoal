import React from 'react'

function Grid() {
  return (
    <div className="grid grid-cols-12">

        <div className="col-span-1 bg-red-300 h-screen">Servidores</div>
        <div className="col-span-3 bg-green-300 h-screen">Canais</div>
        <div className="col-span-6 bg-yellow-300 h-screen">Feed de Mensagens</div>
        <div className="col-span-2 bg-pink-300 h-screen">Área de membros</div>
    </div>
  )
}

export default Grid






