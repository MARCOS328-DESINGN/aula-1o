import express from "express"

const servidor = express();

servidor.get('/calculadora/somar/:m1/:m2'),(req,resp)=> {


let m1= Number (req.params.m1);
let m2= Number (req.params.m2);

let soma = m1 + m2;


resp.send('o resultado é' + soma );
} 

servidor.listen(5050, () => console.log ('api subiu na porta 5050'));