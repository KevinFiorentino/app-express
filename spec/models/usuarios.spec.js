const mongoose = require('mongoose');
const Usuario = require('../../model/Usuario');

describe("Testing Model", () => {
    
    beforeEach( done => {
        mongoose.connect("mongodb://localhost/usuarios", { useNewUrlParser: true })

        const db = mongoose.connection;
        
        db.on("error", console.error.bind(console, "Error en la conexión"));
        db.once("open", function() {
            console.log("Conexión establecida para testing")
            done();
        });
    });

    describe("Usuarios", () => {

        it("Crear y borrar", (done) => {
            
            var usuario = Usuario.createInstance("Kevin XAMPP", "Fiorentino");

            Usuario.add(usuario, function(err, newUser) {
                Usuario.findByUUID(newUser.user_id, function(err, user) {
                    expect(usuario.nombre).toBe("Kevin XAMPP");

                    Usuario.removeByUUID(newUser.user_id, function(err, del) {
                        expect(del.deletedCount).toBe(1);
                        done();
                    })
                    
                });
            })
        })

    });

});