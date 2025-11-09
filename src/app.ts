import Fastify from "fastify";
import { calculatorRoutes } from "./routes/calculator";

const app = Fastify({
  logger: true
});

app.register(calculatorRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
