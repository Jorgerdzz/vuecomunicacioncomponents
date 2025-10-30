<template>
    <div>
        <h1>MENU TABLA MULTIPLICAR</h1>
        <li v-for="num in numeros" :key="num">
            <router-link :to="'/tablamultiplicar/' + num">Tabla multiplicar {{num}}</router-link>
        </li>
    </div>
</template>

<script>
    export default{
        name: "MenuTablaMultiplicar",
        data(){
            return{
                numeros: []
            }
        },
        mounted(){
            this.generarNumeros();
        },
        methods:{
            generarNumeros(){
                for(let i=0; i<3; i++){
                    let random = Math.floor(Math.random()*100);
                    this.numeros.push(random)
                }
            }
        }
    }
</script>