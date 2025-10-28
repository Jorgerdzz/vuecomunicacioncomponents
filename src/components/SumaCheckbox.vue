<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <button @click="generarCheckbox()">Generar Checkbox</button>
        <div v-for="cant in cantidadCheckbox" :key="cant">
            <input type="checkbox" />
            <label v-for="valor in valorCheckbox" :key="valor">{{valor}}</label>
        </div>
        <h3>La suma seleccionada es </h3>
    </div>
</template>

<script>
    export default{
        name: "SumaCheckbox",
        data (){
            return{
                cantidadCheckbox: 0,
                valorCheckbox: [],
                suma: 0
            }
        },
        methods:{
            generarCheckbox(){
                let random = Math.floor(Math.random()*20);
                this.cantidadCheckbox = random
                for(let i=0; i<=this.cantidadCheckbox; i++){
                    let aleatorio = Math.floor(Math.random()*100); 
                    this.valorCheckbox.push(aleatorio)
                }
            }
        }
    }
</script>