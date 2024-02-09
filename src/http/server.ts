import fastify from 'fastify'
import { createdPoll } from '../routes/creates-polls'
import { getPoll } from '../routes/get-pol'

const app = fastify()

app.register(createdPoll)
app.register(getPoll)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server runnig!')
})