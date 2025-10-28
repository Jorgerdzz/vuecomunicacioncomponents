<template>
    <h1 style="color: blue">Numero hijo: {{numero}}</h1>
    <button @click="enviarNumero()">Sumar {{numero}}</button>
</template>

<script>
    export default{
        name: "NumeroHijo",
        props: ["numero"],
        methods: {
            enviarNumero(){
                console.log(this.numero)
                this.$emit("cogerNumero", this.numero)
            }
        }
    }
</script>