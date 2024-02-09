import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createdPoll } from "../routes/creates-polls";
import { getPoll } from "../routes/get-pol";
import { voteOnPoll } from "../routes/vote-on-poll";

const app = fastify();

app.register(cookie, {
  secret: "polls-app",
  hook: "onRequest",
});

app.register(createdPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server runnig!");
});
