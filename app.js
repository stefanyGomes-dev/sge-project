const express = require("express");
const bodyParser = require("body-parser");
const produtoRotas = require("./routes/produtoRotas");
const pedidoRotas = require("./routes/pedidoRotas");
const clienteRotas = require("./routes/clienteRotas");
const detalhePedidoRotas = require("./routes/detalhePedidoRotas");

const sequelize = require("./config/database");

const app = express();
app.use(bodyParser.json());

app.use("/api", produtoRotas);
app.use("/api", pedidoRotas);
app.use("/api", clienteRotas);
app.use("/api", detalhePedidoRotas);

const startServer = async() => {
    try {
        await sequelize.sync();
        console.log("Banco de dados conectado.");
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    } catch(error) {
        console.error("Error ao conectador no banco: ", error);
    }
};

startServer();