<template>
    <div>
        <h1 style="color:red">Padre deportes</h1>
        <h2 v-if="favorito != null" style="backgroundColor: yellow;"> El deporte favorito es {{favorito}}</h2>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :deporte="deporte" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'

    export default{
        name: "PadreDeportes",
        components: {
            HijoDeporte
        },
        data(){
            return{
                deportes: ["Futbol", "Baloncesto", "Tenis", "Padel"],
                favorito: null
            }
        },
        methods: {
            seleccionarFavoritoParent(deporte){
                console.log("padre")
                this.favorito = deporte
            }
        }
    }
</script>