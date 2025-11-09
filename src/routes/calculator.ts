import type { FastifyInstance } from "fastify";

interface CalcQuery {
  a: string;
  b: string;
}

interface CalcResponse {
  operation: string;
  result: number | string;
}

export async function calculatorRoutes(app: FastifyInstance) {

  app.get("/add", async (req, reply) => {
    const { a, b } = req.query as CalcQuery;
    const result = Number(a) + Number(b);
    return { operation: "addition", result } as CalcResponse;
  });

  app.get("/subtract", async (req, reply) => {
    const { a, b } = req.query as CalcQuery;
    const result = Number(a) - Number(b);
    return { operation: "subtraction", result } as CalcResponse;
  });

  app.get("/multiply", async (req, reply) => {
    const { a, b } = req.query as CalcQuery;
    const result = Number(a) * Number(b);
    return { operation: "multiplication", result } as CalcResponse;
  });

  app.get("/divide", async (req, reply) => {
    const { a, b } = req.query as CalcQuery;

    if (Number(b) === 0) {
      reply.code(400);
      return { operation: "division", result: "Cannot divide by zero" };
    }

    const result = Number(a) / Number(b);
    return { operation: "division", result } as CalcResponse;
  });
}
