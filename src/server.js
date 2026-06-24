import express from "express"
// import { prisma } from "./utils/prisma.js"
import { prisma } from "./lib/prisma.ts"

const app = express()
const PORT = 3000

app.use(express.json ())

// app.get("/", async (req, res) =>{

//     const user = await prisma.user.findMany()
//     res.json(user)
// })

app.listen(PORT, () => {
  console.log("servidor rodando"); // Isso é uma mensagem de log, NÃO um endereço
});