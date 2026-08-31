import express from 'express'

import alunoRoutes from './route/alunos.js'
import professorRoutes from './route/professor.js'
import diciplinaRoutes from './route/diciplinas.js'
import cursoRoutes from './route/cursos.js'
import turmaRoutes from './route/turmas.js'

const app = express()

app.use(express.json())

app.use('/alunos', alunoRoutes)
app.use('/professores', professorRoutes)
app.use('/diciplinas', diciplinaRoutes)
app.use('/cursos', cursoRoutes)
app.use('/turmas', turmaRoutes)

export default app

