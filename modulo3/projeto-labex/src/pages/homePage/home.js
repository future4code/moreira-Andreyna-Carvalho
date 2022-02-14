import { Link } from "react-router-dom";


export default function Home() {
  //Vou ser uma função de home
  return (
    <div>
      <h1>Viagem LabeX</h1>
      <button></button>
      <Link to='/all-trip'><button>Ver viagens disponíveis</button></Link>
      <Link to='/area-admin'><button>Área do Admin</button></Link>
    </div>
  );
}