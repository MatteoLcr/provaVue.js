<script setup>
import { servizi } from '../utils/servizi';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];
</script>


<template>
    <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="servizio in servizi" :key="servizio.id">
            <div class="flex flex-row justify-evenly items-center bg-orange-200 p-30">
                <div class="flex flex-col items-start">
                    <h2 class="text-5xl font-bold text-purple-600">{{ servizio.titolo }}</h2>
                    <h3 class="text-purple-700 text-2xl font-semibold mt-2">{{ servizio.sottotitolo }}</h3>
                    <p class="text-gray-600 mt-2">{{ servizio.descrizione }}</p>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-10">Scopri di
                        più</button>
                </div>
                <div class="w-100 h-100 rounded-full bg-orange-700"></div>
            </div>
        </swiper-slide>
    </swiper>

    <div class="h-200 flex flex-col justify-center items-center ">
        <h2 class="text-3xl text-center font-semibold mt-10">
            Cosa può fare il welfare aziendale per la tua impresa?
        </h2>
        <div class="flex flex-row justify-evenly items-center mt-15 ">
            <div class="flex flex-col jusify-center items-center">
                <div class="rounded-full bg-green-200 h-70 w-70"></div>
                <h5 class="text-gray-700 text-xl font-semibold mt-5">Migliora il benessere dei dipendenti</h5>
                <p class="text-base">offrendo loro tanti servizi utili e premiandoli</p>
            </div>
            <div class="flex flex-col jusify-center items-center mx-40">
                <div class="rounded-full bg-red-200 h-70 w-70"></div>
                <h5 class="text-gray-700 text-xl font-semibold mt-5">Aumenta l'attrattività della tua azienda</h5>
                <p class="text-base">dando rilevanza e richiamando nuovi talenti</p>
            </div>
            <div class="flex flex-col jusify-center items-center">
                <div class="rounded-full bg-blue-200 h-70 w-70"></div>
                <h5 class="text-gray-700 text-xl font-semibold mt-5">Dà accesso a vantaggi fiscali</h5>
                <p class="text-base">riducendo i costi del lavoro dei dipendenti</p>
            </div>
        </div>
        <button class="btnApprofondisci bg-green-300 hover:bg-green-500 text-black py-2 px-4 rounded mt-10">Approfondisci i vantaggi del welfare</button>

    </div>
</template>