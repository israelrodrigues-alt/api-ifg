import { turmas } from '../dados/db.js'

export const listar = (pedido, resposta) => {
  resposta.json(turmas)
}

export const criar = (pedido, resposta) => {
  const turma = {
    id : turmas.length + 1,
    id : pedido.body.id.id_professor,
  }

  turmas.push(turma)
  resposta.json(turma)
}

export const atualizar = (pedido, resposta) => {
  const index = turmas.findIndex(turma => turma.id == pedido.params.id)

  if (index === -1) {
    return resposta.json({ mensagem: 'turma não encontrado' })
  }

  turmas[index] = { ...turmas[index], ...pedido.body }
  resposta.json(turmas[index])
}

export const deletar = (pedido, resposta) => {
  const index = turmas.findIndex(turma => turma.id === pedido.params.id)
  if (index === -1) {
    return resposta.json({ mensagem: 'turma não encontrado' })
  }

  turmas.splice(index, 1)
  resposta.json({ mensagem: 'turma deletado com sucesso' })
}
