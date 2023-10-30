const http = require("http") // Librería incluida en NodeJS, permite crea un servidor HTTP
const PORT = 3000

const server = http.createServer(async (req, res) => {
    // req. Información de la solicitud
    // res. Configurar y enviar la respuesta

    // Establecer encabezado de la respuesta
    res.writeHead(200, { "Content-Type": "application/json" })

    try {

        /*
        Ejemplo de como obtener data en nuestro servidor básico de NodeJS

        Utilizando async/await
        */
        console.log("Obteniendo Data")
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")

        const json = await response.json()

        console.log("Presentando Data")

        res.end(JSON.stringify(json))

    } catch {
        console.log("Ocurrio un error")
    }

})

server.listen(PORT, () => {
    console.log("El Servidor esta listo")
})





