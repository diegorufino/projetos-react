import React from 'react';

function App(props){

  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criarComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
      
    )
  }

  const MeuComboBox = () => criarComboBox();

  return (
    <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1> Hello {props.nome}</h1>
      <MeuComboBox />
    </>
  )
}

export default App;
