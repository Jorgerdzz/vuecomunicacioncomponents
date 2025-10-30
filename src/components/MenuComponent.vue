<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Padre deportes</router-link>
            </li>
            <li>
                <router-link to="/comics">Comics</router-link>
            </li>
            <li>
                <router-link to="/numeros">Numeros</router-link>
            </li>
            <li>
                <router-link to="/multiple">Seleccion multiple</router-link>
            </li>
            <li>
                <router-link to="/checkbox">Suma checkbox</router-link>
            </li>
            <li>
                <router-link to="/doble">Numero doble</router-link>
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/doble/' + num">Doble {{num}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent",
        data(){
            return{
                numeros: [90,60,78,10]
            }
        }
        
    }
</script>

<style>
    @import '../assets/css/menu.css'
</style>