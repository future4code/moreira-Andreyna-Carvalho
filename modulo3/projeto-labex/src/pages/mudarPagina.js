 import React, { useState } from "react";
import Dashboard from "./dashboard/dashboard";
import TripDetail from "./tripDetail/tripDetail";

export default function MudarPagina() {
  const [mudarPagina, setMudarPagina] = useState('')
  const [recebeId, setRecebeId] = useState('')

  const telaAdmin = () => {
    setMudarPagina('telaAdmin');
  }
  const telaDetalhe = (id) => {
    setMudarPagina('telaDetalhe');
    setRecebeId(id)
  }
  const pagina = () => {
    switch (mudarPagina) {
			case 'telaAdmin':
				return <Dashboard telaDetalhe={telaDetalhe} />;
			case 'telaDetalhe':
				return <TripDetail telaAdmin={telaAdmin} id={recebeId} />;
			default:
				return <Dashboard telaDetalhe={telaDetalhe} />;
		}
  }

  return (
    <div>
      {pagina()}
    </div>
  );
} 