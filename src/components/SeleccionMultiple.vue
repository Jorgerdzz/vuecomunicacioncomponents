<template>
    <div>
        <form v-on:submit.prevent="mostrarSeleccionados">
            <select multiple size="7" ref="selectmultiple">
                <option v-for="option in options" :key="option" :value="option">{{option}}</option>
            </select><br>
            <button>Mostrar seleccionados</button>
        </form>
        <h3 style="color: blue">{{seleccionados}}</h3>
    </div>
</template>

<script>
    export default{
        name: "SeleccionMultiple",
        data () {
            return {
                options: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6", "Elemento 7"],
                seleccionados: ""
            }
        }, 
        methods: {
            mostrarSeleccionados(){
                for(let option of this.$refs.selectmultiple){
                    if(option.selected){
                        this.seleccionados += option.value + ", ";
                    }
                }
            }
        }
        
    }
</script>