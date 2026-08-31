import { disciplinas } from '../dados/db.js'

export const listar = (pedido, resposta) => {
  resposta.json(disciplinas)
}

export const criar = (pedido, resposta) => {
  const disciplina = {
    id : disciplinas.length + 1,
    matricula : pedido.body.matricula,
    nome : pedido.body.nome,
    curso : pedido.body.curso,
    dataNascimento : pedido.body.dataNascimento,
    email : pedido.body.email
  }

  disciplinas.push(disciplina)
  resposta.json(disciplina)
}

export const atualizar = (pedido, resposta) => {
  const index = disciplinas.findIndex(disciplina => disciplina.id == pedido.params.id)

  if (index === -1) {
    return resposta.json({ mensagem: 'Disciplina não encontrada' })
  }

  disciplinas[index] = { ...disciplinas[index], ...pedido.body }
  resposta.json(disciplinas[index])
}

export const deletar = (pedido, resposta) => {
  const index = disciplinas.findIndex(disciplina => disciplina.id === pedido.params.id)
  if (index === -1) {
    return resposta.json({ mensagem: 'Disciplina não encontrada' })
  }

  disciplinas.splice(index, 1)
  resposta.json({ mensagem: 'Disciplina deletada com sucesso' })
}
  console.log('Server is running on port 3000')
