<template>
    <div>
        <h1>Numeros Padre</h1>
        <h2 style="color: red">La suma es:{{suma}}</h2>
        <button @click="generarNumero()">Nuevo Número</button>
        <div v-for="num in numeros" :key="num">
            <NumeroHijo :numero="num" v-on:cogerNumero="cogerNumero"/>
        </div>
        
    </div>
</template>

<script>
import NumeroHijo from './NumeroHijo.vue'

    export default{
        name: "NumerosPadre",
        components: {
            NumeroHijo
        }, 
        methods: {
            generarNumero(){
                let numero = Math.floor(Math.random() * 100);
                this.numeros.push(numero);
            },
            cogerNumero(numero){
                this.suma += numero
            }
        },
        data () {
            return {
                numeros: [14, 22],
                suma: 0
            }
        }
    }
</script>