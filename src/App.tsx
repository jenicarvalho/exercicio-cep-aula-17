import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { CEP } from './types/cep'
/**
 * Consuma a API dos correios e mostre as informações passando o cep
    Essa é a API: https://viacep.com.br/ws/13010150/json/
    A parte em vermelho é o CEP que deve ser alterado pelo o que o usuário digitar
    Faça uma página com um input de texto que será digitado o CEP
    Crie um botão que irá enviar essa requisição
    Mostre todas as informações na tela
    Tipe o retorno
    Use typescript, axios, useState, interface

 */

function App() {

  const [cep, setCep] = useState<String>("")
  const [endereco, setEndereco] = useState<CEP>()

  const getCep = () => {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => setEndereco(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Digite seu cep..." onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Buscar CEP</button>

        <ul>
          <li>Bairro: {endereco?.cep}</li>
          <li>CEP: {endereco?.cep}</li>
          <li>UF: {endereco?.uf}</li>
          <li>Rua: {endereco?.logradouro}</li>
          <li>Cidade: {endereco?.localidade}</li>
        </ul>
    </div>
  );
}

export default App;
