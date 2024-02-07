import fastify from 'fastify'
import { createdPoll } from '../routes/creates-polls'

const app = fastify()

app.register(createdPoll)

app.listen({port: 3333}).then(() => {
    console.log('HTTP server runnig!')
})