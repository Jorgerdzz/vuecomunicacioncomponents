<template>
    <div>
        <h1 style="color: blue">{{comic.titulo}}</h1>
        <img :src="comic.imagen"/>
        <h3>Descripcion: {{comic.descripcion}}</h3>
        <h3 :class="{
            rojo: comic.year<=2000,
            verde: comic.year>2000
        }">Año: {{comic.year}}</h3>
        <button @click="enviarComic()">Marcar favorito</button>
        <button @click="enviarIndex()">Eliminar comic</button>
    </div>
</template>

<script>
    export default{
        name: "ComicComponent",
        props: ["comic", "index"],
        methods:{
            enviarComic(){
                this.$emit("comicfavorito", this.comic)
            },
            enviarIndex(){
                this.$emit("deleteComic", this.index)
            }
        }
    }
</script>

<style>
    @import "../assets/css/comics.css";
</style>