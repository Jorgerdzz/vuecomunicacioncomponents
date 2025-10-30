<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(num, index) in numeros" :key="index">
                    <td>{{ objeto.operacion[index] }}</td>
                    <td>{{ objeto.resultado[index] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            objeto: {
                operacion: [],
                resultado: []
            },
            numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
        };
    },
    watch: {
        '$route.params.numero'(nextVal, oldVal) {
            if (nextVal !== oldVal) {
                this.objeto.resultado = [];
                this.objeto.operacion = [];

                const numero = Number(nextVal);

                for (let i = 1; i <= 10; i++) {
                    this.objeto.resultado.push(numero * i); 
                    this.objeto.operacion.push(`${numero} * ${i}`);
                }
            }
        }
    }
};
</script>