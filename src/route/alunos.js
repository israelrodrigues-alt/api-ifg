import (Router) from 'express'
import { listar, criar, atualizar, deletar } from '../controllers/alunocontroller.js'

const router = Router()

router.get('/alunos', listar)
router.post('/alunos', criar)
router.put('/alunos/:id', atualizar)
router.delete('/alunos/:id', deletar)

fi