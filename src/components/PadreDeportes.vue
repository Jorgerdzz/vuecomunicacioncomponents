<template>
    <div>
        <h1 style="color:red">Padre deportes</h1>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :deporte="deporte"/>
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
                deportes: ["Futbol", "Baloncesto", "Tenis", "Padel"]
            }
        }
    }
</script>