import React, { useState } from "react";
import "./styles.css"

import Card from "../../components/Card"

function Home() {

  //Muda o stado da variavel estudante em tempo real
  const [studentName, setStudentName] = useState();

  //Cria um array de estudantes
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: "2-digit"
      })
    };

    //cria um novo vetor com os dados anteriores
    setStudents(prevState => [...prevState, newStudent]);
  
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {
        //os cards ficam dinâmicos, pois para cada item da lista e gerado um card.
        students.map(student => (
        <Card 
          //Sempre utilizar uma key quando estiver utilizando uma estrutura de repetição. 
          key={student.time}
          name={student.name} 
          time={student.time}/>
        ))
      }

    </div>
  )
}

export default Home
