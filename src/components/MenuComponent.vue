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
            <li>
                <router-link to="/doble/14">Numero doble</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    @import '../assets/css/menu.css'
</style>