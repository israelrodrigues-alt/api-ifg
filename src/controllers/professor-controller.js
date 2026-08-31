import { professores } from '../dados/db.js'

export const listar = (pedido, resposta) => {
  resposta.json(professores)
}

export const criar = (pedido, resposta) => {
  const professor = {
    id : professores.length + 1,
    matricula : pedido.body.matricula,
    nome : pedido.body.nome,
    curso : pedido.body.curso,
    dataNascimento : pedido.body.dataNascimento,
    email : pedido.body.email
  }

  professores.push(professor)
  resposta.json(professor)
}

export const atualizar = (pedido, resposta) => {
  const index = professores.findIndex(professor => professor.id == pedido.params.id)

  if (index === -1) {
    return resposta.json({ mensagem: 'Professor não encontrado' })
  }

  professores[index] = { ...professores[index], ...pedido.body }
  resposta.json(professores[index])
}

export const deletar = (pedido, resposta) => {
  const index = professores.findIndex(professor => professor.id === pedido.params.id)
  if (index === -1) {
    return resposta.json({ mensagem: 'Professor não encontrado' })
  }

  professores.splice(index, 1)
  resposta.json({ mensagem: 'Professor deletado com sucesso' })
}
  console.log('Server is running on port 3000')
