<template>
    <div>
        <h1>Numero doble: {{doble}}</h1>
        <h2 style="color:red">{{mensaje}}</h2>
    </div>
</template>

<script>
    export default{
        name: "NumeroDoble",
        data(){
            return{
                mensaje: "",
                doble: 0
            }
        },
        mounted(){
            console.log("Param:" + this.$route.params.numero)
            let numero = this.$route.params.numero;
            if(numero==""){
                this.mensaje = "Sin parametros en Routing"
            }else{
                this.mensaje = "Con parametros en Routing" + numero;
                this.doble = parseInt(numero)*2;
            }
        }, 
        // updated(){
        //     let numero = this.$route.params.numero;
        //     if(numero == ""){
        //         this.mensaje = "Sin parametros en Routing"
        //     }else{
        //         this.mensaje = "Con parametros en Routing" + numero;
        //     }
        // }, 
        watch:{
            '$route.params.numero'(nextVal, oldVal){
                if(nextVal != oldVal){
                    this.mensaje = 'Esto ha cambiado:' + this.$route.params.numero;
                    this.doble = parseInt(this.$route.params.numero) * 2;
                    console.log("Next:" + nextVal);
                    console.log("Old: " + oldVal);
                } 
            }
        }
    }
</script>