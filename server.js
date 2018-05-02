console.log({estado:"Iniciando..."})
import express from 'express'

const app = express()

app.use('/graphql',(req,res)=>{
    res.send({data:true})
})
app.listen(4000,()=>{
    console.log({estado:"Iniciado"})
})