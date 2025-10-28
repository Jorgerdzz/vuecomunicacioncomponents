<template>
    <div>
        <h1 style="color:blue">Hijo deporte {{deporte}}</h1>
        <button @click="seleccionarFavorito()" >Marcar favorito</button>
    </div>
</template>

<script>
    export default{
        name: "HijoDeporte",
        props: ["deporte"],
        methods: {
            seleccionarFavorito(){
                console.log("hijo" + this.deporte);
                this.$emit("SeleccionarFavoritoParent", this.deporte)
            }
        }
    }
</script>