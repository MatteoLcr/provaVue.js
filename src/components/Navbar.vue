<script setup>
import { Instagram, Linkedin, LogIn } from 'lucide-vue-next';
</script>

<template>
    <nav class="p-4 flex flex-col justify-center items-center">
        <div class="flex flex-row justify-between items-center w-350">
            <div class="flex justify-center items-center">
                <div class="rounded-full border-2 border-blue-700 p-1">
                    <Instagram class="w-5 h-5 text-blue-500" />
                </div>
                <div class="rounded-full border-2 border-blue-700 p-1 mx-3">
                    <Linkedin class="w-5 h-5 text-blue-500" />
                </div>
                <button class="bg-blue-200 text-blue-500 py-1 px-2 rounded-3xl ">Ultime news</button>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-gray-500">Area clienti</p>
                <LogIn class="w-5 h-5 text-gray-700 mx-2" />
                <h5>Accedi</h5>
            </div>
        </div>
        <div class="w-350 border-1 border-gray-300 my-2"></div>
        <div class="flex justify-between items-center w-350">
            <h2 class="text-xl text-purple-500 font-bold me-10"><router-link to="/">My Vue App</router-link></h2>
            <ul class="flex gap-6">
                <li class="hover:text-gray-400"></li>
                <li class="hover:text-gray-400"><router-link to="/chisiamo">Chi siamo</router-link></li>
                <li class="hover:text-gray-400"><router-link to="/welfare">Welfare</router-link></li>
                <li class="hover:text-gray-400"><router-link to="/soluzioni">Soluzioni</router-link></li>
                <li class="hover:text-gray-400"><router-link to="/news">News</router-link></li>
                <li class="hover:text-gray-400"><router-link to="/contatti">Contact</router-link></li>
            </ul>
            <button class="bg-green-300 hover:bg-green-500 text-white py-2 px-4 ms-5 rounded">Attiva servizi
                welfare</button>
        </div>
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
