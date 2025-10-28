<template>
    <div>
        <form v-on:submit.prevent="cogerValores()">
            <select multiple>
                <option v-for="elemento in elementos" :key="elemento">
                    {{elemento}}
                </option>
            </select>
            <button>Mostrar seleccionados</button>
        </form>
    </div>
</template>

<script>
    export default{
        name: "SeleccionMultiple",
        data () {
            return{
                element: [],
                elementos: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6"]
            }
        },
        cogerValores(){

        }
    }
</script>