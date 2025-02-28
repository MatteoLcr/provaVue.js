<script setup>
</script>

<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-center items-center">
        <h2 class="text-xl text-purple-500 font-bold me-10">My Vue App</h2>
        <ul class="flex gap-6">
            <li class="hover:text-gray-400"><router-link to="/">Home</router-link></li>
            <li class="hover:text-gray-400"><router-link to="/contatti" >Contact</router-link></li>
            <li class="hover:text-gray-400"><router-link to="/user" >Profilo</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 15px;
}

.navbar a {
    color: white;
    text-decoration: none;
}

.navbar a:hover {
    text-decoration: underline;
}
</style>
