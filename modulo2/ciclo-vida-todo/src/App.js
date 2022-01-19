import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  width: 250px;
  border: solid 2px black;
  padding: 20px 0;
  padding-left: 20px ;

`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  width: 50%;
  display: flex;
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const Lateral = styled.div`
  padding: 0;
  width: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const Lat = styled.div`
  width: 50%;

`
const Botao = styled.button`
  width: 50%;
`

class App extends React.Component {

  //Observações importantes, sinto que esse código está na mais perfeita e
  // pura de uma gambiarra!!!
  // Vou deixar por agr, meus conhecimentos ainda não são suficientes,
  // Porém saibaaaa que eu naum desisti em Thiago!! 
  // Quanto eu tiver fera no React voltarei para esse projeto!

  state = {
    inputValue: '',
    filtro: '',
    tarefas: [
      { id: Date.now(), texto: 'texto da primeira tarefa', completa: false },
      { id: Date.now(), texto: 'texto da segunda tarefa', completa: true }
    ]
  }

  salvarLocal = () => {
    localStorage.setItem('valor', this.state.inputValue);
    localStorage.setItem('filtro', this.state.filtro);
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))

  }

  buscarLocal = () => {
    const tarefa2 = localStorage.getItem('tarefas')
    const toDo = JSON.parse(tarefa2)

    this.setState({
      inputValue: '',
      filtro: '',
      tarefas: toDo
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.salvarLocal();
    console.log('Atualizei nas tarefas');
  }

  componentDidMount() {
    this.buscarLocal();
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const newToDo = [...this.state.tarefas,
    { id: Date.now(), texto: this.state.inputValue, completa: false }
    ]
    this.setState({
      tarefas: newToDo,
      inputValue: ""
    })
  }

  selectTarefa = (id) => {
    const novaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const newTarefa = { ...tarefa, completa: !tarefa.completa }
        return newTarefa
      } else { return tarefa }
    })
    this.setState({ tarefas: novaTarefa })

  }

  delet = (indexRecebido) => {
    const newList = [...this.state.tarefas].filter(
      (list, index) => {
        return index !== indexRecebido
      }
    )
    this.setState({ tarefas: newList })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const Sep = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case '':
          return !tarefa.completa
        default:
          return true
      }
    })

    const Comp = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case '':
          return tarefa.completa
        default:
          return true
      }
    })

    const listaTarefa = this.state.tarefas.map(
      (tarefa, indexEnviado) => {
        return (
          <div key={indexEnviado}>
            <Botao onClick={() => this.delet(indexEnviado)}>x</Botao>
          </div>
        )
      }
    )


    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input placeholder='Adicionar tarefa' value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          <Lateral>

            <Lat>
              {listaFiltrada.map(tarefa => {

                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => this.selectTarefa(tarefa.id)}
                  >
                    {tarefa.texto}
                  </Tarefa>
                )
              })}
            </Lat>

            <Lat>
              {listaTarefa}
            </Lat>
          </Lateral>

          <h3>Tarefas Pendentes:</h3>

          {Sep.map(tarefa => {
            return (
              <Tarefa>
                {tarefa.texto}
              </Tarefa>
            )
          })}
          <h3>Tarefas completas:</h3>
          {Comp.map(tarefa => {
            return (
              <Tarefa>
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
