<template>
    <div>
        <h1 style="color:blue">Hijo deporte {{deporte}}</h1>
    </div>
</template>

<script>
    export default{
        name: "HijoDeporte",
        props: ["deporte"]
    }
</script>