import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { urlViagem } from "../../components/url/urls";
import VerificaLogin from "../verificaLogin";

const verCalendario = () => {
  const data = new Date()
  const mes = ("0" + (data.getMonth() + 1)).slice(-2)
  const ano = data.getFullYear()
  let dia = Number(data.getDay()) + 2
  dia = ("0" + dia.toString()).slice(-2)
  return `${dia}/${mes}/${ano}`
}

export default function CreateNewTrip() {
  //STATES
  const [nome, setNome] = useState('');
  const [planeta, setPlaneta] = useState('');
  const [data, setData] = useState(verCalendario());
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');

  const [criacaoViagem, setCriacaoViagem] = useState([])

  //TARGETS
  const onNome = (e) => {
    setNome(e.target.value)
  }
  const onPlaneta = (e) => {
    setPlaneta(e.target.value)
  }
  const onData = (e) => {
    setData(e.target.value)
  }
  const onDescricao = (e) => {
    setDescricao(e.target.value)
  }
  const onDuracao = (e) => {
    setDuracao(e.target.value)
  }

  const criarViagem = () => {
    const body = {
      name: nome,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: duracao,
    }
    axios.post(urlViagem, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((res) => {
      setCriacaoViagem(res.data)
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    })
  }


  return (
    <div>
      <h1>CreateNewTrip</h1>
      <div>
                <input placeholder='Nome' name='' size="50" value={nome} onChange={onNome} required ></input>
                <input placeholder='Planeta' size="50" value={planeta} onChange={onPlaneta} required ></input>
                <TextField
                        id="date"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={data} onChange={onData}></TextField>

                <input placeholder='Descrição' size="50" value={descricao} onChange={onDescricao} required ></input>
                <input placeholder='Duração em dias' size="50" value={duracao} onChange={onDuracao} required ></input>
                <button variant="contained" color="secondary" onClick={criarViagem}>Criar viagem</button>          
            </div> 
            <Link to="/dashboard"><button>voltar</button></Link>

            
    </div>
  );
}