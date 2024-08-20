var persona = {
    [Symbol("id")]: 123456,
    rut: "11.111.111-1",
    nombre: "Luis",
    apellido: "Durán",
    edad: "25"
}

// console.log(persona);
// console.log("Propiedades sin Symbol",Object.getOwnPropertyNames(persona));

const [symbol] = Object.getOwnPropertySymbols(persona);

// console.log("valor simbolo", persona[symbol]);

// console.log("Symbols",Object.getOwnPropertySymbols(persona));


const sim1 = Symbol.for("id")
const sim2 = Symbol.for("code")
const sim3 = Symbol.for("id")

// console.log("Igualdad sim1 y sim2", sim1 == sim2);
// console.log("Igualdad sim1 y sim3", sim1 == sim3);

// var arr1 = [1,2,3]
// var arr2 = [1,2,3]
// var arr3 = arr1
// console.log(arr1 == arr3);

console.log(persona);


var proxyPersona = new Proxy(persona, {
    get: function(objeto,propiedad) { //Obtener valores de propiedades del objeto
        if(propiedad == 'nombre') {
            return objeto[propiedad].toUpperCase()
        }
        if(propiedad == 'rut') {
            return objeto[propiedad].replaceAll(".","")
        }
        if(propiedad == 'edad') {
            return parseInt(objeto[propiedad])
        }
        return objeto[propiedad]
    },
    set: function(objeto, propiedad, valorNuevo) { // Asignar valores de propiedades del objeto
        if(propiedad == 'nombre' || propiedad == 'apellido') {
            return objeto[propiedad] = valorNuevo.toUpperCase()
        }
        if(propiedad == 'edad') {
            if(isNaN(valorNuevo)) {
                throw "Debe asignar un valor numérico para la edad"
            }
            return objeto[propiedad] = parseInt(valorNuevo)
        }

        return objeto[propiedad] = valorNuevo
    }
})

// proxyPersona.nombre = "maría"
// proxyPersona.apellido = "morales"
// proxyPersona.edad = "quince"

// console.log(proxyPersona.rut);
console.log(proxyPersona.nombre);
console.log(proxyPersona.apellido);
// console.log(proxyPersona.edad);


console.log(proxyPersona);