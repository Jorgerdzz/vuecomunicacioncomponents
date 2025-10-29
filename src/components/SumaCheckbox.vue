<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <form v-on:submit.prevent="aleatorio()">
            <button>Generar Checkbox</button>
        </form>
        <div v-for="num in numeros" :key="num">
            <input ref="input" type="checkbox" :value="num" @click="sumatorio()"/><label>{{num}}</label>
        </div>
        <h3 style="color:blue">La suma seleccionada es {{suma}}</h3>
    </div>
</template>

<script>

    export default{
        name: "SumaCheckbox",
        data () {
            return {
                numeros: [],
                suma: 0
            }
        },
        methods: {
            aleatorio(){
                this.numeros = []
                let random = Math.floor(Math.random()*20);

                for(let i=0; i<=random; i++){
                    this.numeros.push(Math.floor(Math.random()*100))
                }
            },
            sumatorio(){
                this.suma = 0;
                for(let input of this.$refs.input){
                    if(input.checked){
                        this.suma += parseInt(input.value);
                    }
                }
                
            }
        }
    }
</script>