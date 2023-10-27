import Model from '../model/numeros.js'

class Servicio {
    constructor() {
        this.model = new Model()
    }

    obtenerNumeros = async () => {
        const numeros = await this.model.obtenerNumeros()
        return numeros
    }

    obtenerPromedio = async () => {
        const numeros = await this.model.obtenerNumeros()
        let promedio = 0
        if (numeros.length != 0) {
            const suma = numeros.map(n => n.numero).reduce((acc, numero) => acc + numero, 0)
            promedio = suma / numeros.length
        }
        return promedio
    }

    obtenerCantidad = async () => {
        const numeros = await this.model.obtenerNumeros()
        return numeros.length
    }

    obtenerMinMax = async () => {
        const numeros = await this.model.obtenerNumeros()
        const numerosMax = numeros.sort((a, b) => b.numero - a.numero)[0]
        const numerosMin = numeros.sort((a, b) => a.numero - b.numero)[0]
        const numerosOrd = [numerosMin.numero, numerosMax.numero]
        return numerosOrd
    }

    guardarNumero = async numero => {
        const numeroGuardado = await this.model.guardarNumero(numero)
        return numeroGuardado
    }
}

export default Servicio