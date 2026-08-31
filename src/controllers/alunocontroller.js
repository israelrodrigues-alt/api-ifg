import { alunos } from '../dados/db.js'

export const listar = (pedido, resposta) => {
  resposta.json(alunos)
}

export const criar = (pedido, resposta) => {
  const aluno = {
    id : alunos.length + 1,
    matricula : pedido.body.matricula,
    nome : pedido.body.nome,
    curso : pedido.body.curso,
    dataNascimento : pedido.body.dataNascimento,
    email : pedido.body.email
  }

  alunos.push(aluno)
  resposta.json(aluno)
}

export const atualizar = (pedido, resposta) => {
  const index = alunos.findIndex(aluno => aluno.id == pedido.params.id)

  if (index === -1) {
    return resposta.json({ mensagem: 'Aluno não encontrado' })
  }

  alunos[index] = { ...alunos[index], ...pedido.body }
  resposta.json(alunos[index])
}

export const deletar = (pedido, resposta) => {
  const index = alunos.findIndex(aluno => aluno.id === pedido.params.id)
  if (index === -1) {
    return resposta.json({ mensagem: 'Aluno não encontrado' })
  }

  alunos.splice(index, 1)
  resposta.json({ mensagem: 'Aluno deletado com sucesso' })
}
