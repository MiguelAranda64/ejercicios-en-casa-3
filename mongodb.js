const express = require("express");
const usuarios = require("./mongo");
const cors = require("cors");
const mongodb = express();
mongodb.use(express.json())
mongodb.use(express.urlencoded({ extended: true }))

mongodb.use(cors())



mongodb.use((err, req, res, next) => {
  console.error('Error en la aplicación:', err);
  res.status(500).send('Error interno del servidor');
});




mongodb.use(cors(corsOptions));

mongodb.post("/", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await usuarios.findOne({ username });
  
      if (user) {
        // Verificar la contraseña
        if (user.password === password) {
          res.json("exist"); // Usuario y contraseña coinciden
        } else {
          res.json("incorrectPassword"); // Contraseña incorrecta
        }
      } else {
        res.json("notexist"); // Usuario no encontrado
      }
    } catch (e) {
      res.json("fail");
    }
  });


  mongodb.post("/register", async (req, res) => {
    try {
      console.log('Solicitud de registro recibida:', req.body);
      const { username, password, email, birthdate, gender, weight, height } = req.body;
      const newUser = new usuarios({ username, password, email, birthdate, gender, weight, height });
      await newUser.save();
      res.status(200).send('USUARIO REGISTRADO');
    } catch (err) {
      console.error('Error al registrar usuario:', err);
      console.error('Detalles:', err.message); // Imprime el mensaje de error
      console.error('Stack:', err.stack); // Imprime la pila de llamadas
      res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
    }
  });


mongodb.listen(9000,()=>{
    console.log("port connected");
})