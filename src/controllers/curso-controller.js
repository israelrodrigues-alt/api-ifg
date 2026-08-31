import {cursos} from '../dadosdb.js'


app.get('/Cursos', (pedido, resposta) => {
  resposta.json(cursos)
})

app.post('/Cursos', (pedido, resposta) => {

  const Curso = {
    id : cursos.length + 1,
    matricula : pedido.body.matricula,
    nome : pedido.body.nome,
    curso : pedido.body.curso,
    dataNascimento : pedido.body.dataNascimento,
    email : pedido.body.email
  }

  cursos.push(Curso)
  resposta.json(Curso)
})

app.put('/Cursos/:id', (pedido, resposta) => {
  const index = cursos.findIndex(Curso => Curso.id == pedido.params.id)

  if (index === -1) {
    return resposta.json({ mensagem: 'Curso não encontrado' })
  }

  cursos[index] = { ...cursos[index], ...pedido.body }
  resposta.json(cursos[index])

})

app.delete('/Cursos/:id', (pedido, resposta) => {
  const index = cursos.findIndex(Curso => Curso.id === pedido.parms.id)
  if (index === -1) {
    return resposta.json({ mensagem: 'Curso não encontrado' })
  }

  cursos.splice(index, 1)
  resposta.json({ mensagem: 'Curso deletado com sucesso' })
})




// --------------------------- Check if the API is working --------------------------- 

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
