<template>
    <div>
        <h2>Componente Cliente</h2>
        <p>{{ name }}</p>
        <button>Enviar</button><br>
        <textarea :placeholder="placeholder"></textarea><br>
        <input type="submit" :value="placeholder">
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Cliente Data binding', 
            placeholder: 'Escreva aqui sua vida de merda'
        }
    }
}
</script>

<style scoped> 

</style>
