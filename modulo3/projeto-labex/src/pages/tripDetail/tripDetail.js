import axios from "axios";
import { useEffect } from "react";
import { urlTripDetail } from "../../components/url/urls";
import VerificaLogin from "../verificaLogin";


export default function TripDetail(props) {
  //Vou ser uma função de de apertar e ver os detalhes
  VerificaLogin();
  useEffect(() => {
    const token = localStorage.getItem('token') 
    const detalhes = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/dricaMoreira/trip/' + this.props.id

    axios.get(detalhes, { // + o id da viagem
      headers: {
        auth: token
      }
    }) 
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err);
  })
  }, [])

  return (
    <div>
      <h1>Trip Detail</h1>
    </div>
  );
}