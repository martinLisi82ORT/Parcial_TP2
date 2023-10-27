
class Model {
    constructor() {
        this.numeros = []
    }

    obtenerNumeros = async () => {
        try {
            return this.numeros
        } catch (error) {
            console.log('Error en obtenerNumeros', error)
            return []
        }
    }

    guardarNumero = async numero => {
        numero.id = String(parseInt(this.numeros[this.numeros.length - 1]?.id || 0) + 1)
        numero.numero = Number(numero.numero)
        this.numeros.push(numero)
        return numero
    }
}

export default Model