<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
</script>

<template>

    <Head title="Dashboard" />

    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 my-auto">
                Dashboard
            </h2>
        </div>
    </div>

    <div class="md:flex mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Link class="w-1/3" :href="route('lendees.index')">
        <div class="max-w-7xl mx-auto sm:p-3 lg:p-4 py-6 px-4">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="px-6 pt-6 bg-teal-500 border-b border-gray-200
                        hover:bg-teal-600 transition ease-in-out duration-300">
                    <div class="text-white">
                        Lendees
                    </div>
                    <div class="grid place-items-end">
                        <span class="text-[64px] text-white font-extrabold">{{ lendees }}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>

        <Link class="w-1/3" :href="'#'">
        <div class="max-w-7xl mx-auto sm:p-3 lg:p-4 py-6 px-4">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="px-6 pt-6 bg-amber-500 border-b border-gray-200
                        hover:bg-amber-600 transition ease-in-out duration-300">
                    <div class="text-white">
                        Active loans
                    </div>
                    <div class="grid place-items-end">
                        <span class="text-[64px] text-white font-extrabold">{{ active_loans }}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    </div>
</template>

<script>
export default {
    props: {
        auth: Object,
        lendees: Number,
        active_loans: Number,
    }
}
</script>