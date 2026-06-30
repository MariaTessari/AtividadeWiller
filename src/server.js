import express from "express"
import { prisma } from "./lib/prisma.ts"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/produtos", async (req, res) => {
  try{
  const itens = await prisma.produtos.findMany()
  res.json(itens)
  }catch(error){
    res.status(500).json({error: "Erro ao retornar produtos"})
  }
})

app.post("/produtos", async(req, res) => {
const{nome, categoria, quantidade} = req.body

const novoItem = await
prisma.produtos.create({

  data:{nome, categoria, quantidade: Number(quantidade)}
})

});

app.listen(PORT, () => {
  console.log("API rodando"); // Isso é uma mensagem de log, NÃO um endereço
});

