import express from 'express'

import alunosRoutes from './route/alunos.js'
import cursosRoutes from './route/cursos.js'
import disciplinasRoutes from './route/disciplinas.js'
import professorRoutes from './route/professor.js'
import turmasRoutes from './route/turmas.js'

const app = express()

app.use(express.json())

app.use('/alunos', alunosRoutes)
app.use('/cursos', cursosRoutes)
app.use('/disciplinas', disciplinasRoutes)
app.use('/professores', professorRoutes)
app.use('/turmas', turmasRoutes)

export default app
