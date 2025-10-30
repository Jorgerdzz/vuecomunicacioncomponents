<template>
    <div>
        <div class="table-responsive">
            <table class="table table-striped table-hover table-borderless table-primary align-middle">
                <thead class="table-light">
                    <tr>
                        <th>OPERACIÓN</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" v-html="tabla">
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data(){
        return{
            tabla: ""
        }
    },
    methods:{
        generarTabla(){
            let html = "";
            for(let i=1; i<=10; i++){
                html += `
                    <tr class="table-primary">
                        <td>${this.$route.params.numero} * ${i}</td>
                        <td>${this.$route.params.numero * i}</td>
                    </tr>
                `;
            }
            this.tabla = html
        }
    }, 
    mounted(){
        this.generarTabla();
    },
    watch:{
        '$route.params.numero'(nextVal, oldVal){
            if(nextVal != oldVal){
                this.generarTabla();
            }
        }
    }
    
};
</script>