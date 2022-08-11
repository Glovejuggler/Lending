<template>

    <Head title="Lendees" />

    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    Lendees
                </h2>
                <Link as="button" :href="route('lendees.create')" class="inline-flex cursor-pointer
                        items-center px-4 py-2 bg-gray-800
                        border border-transparent rounded-md 
                        font-semibold text-xs text-white uppercase
                        tracking-widest hover:bg-gray-700 active:bg-gray-900
                        focus:outline-none focus:border-gray-900
                        focus:shadow-outline-gray transition ease-in-out duration-150">
                Add
                </Link>
            </div>
        </div>
    </div>

    <div class="pt-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <BreezeInput v-model="search" class="mt-1 block w-96" type="text" placeholder="Search..." />
        </div>
    </div>

    <div class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <table class="table-fixed w-full text-sm whitespace-nowrap">
                        <thead>
                            <tr class="uppercase text-left">
                                <th class="px-3">Name</th>
                                <th class="px-3">Address</th>
                                <th class="px-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lendee in lendees.data" class="hover:bg-neutral-200 group">
                                <td class="rounded-l-lg">
                                    <Link class="flex p-3" as="button" :href="route('lendees.show', lendee.id)">
                                    {{ lendee.name }}
                                    </Link>
                                </td>
                                <td>
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
                                    {{ lendee.address }}
                                    </Link>
                                </td>
                                <td class="rounded-r-lg">
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
                                    {{ lendee.loan ? 'Active' : '' }}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination class="mt-6" :links="lendees.links" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Pagination from '@/Components/Pagination.vue';
import BreezeInput from '@/Components/Input.vue';
import { ref, watch } from "vue";
import { Inertia } from '@inertiajs/inertia';
import throttle from 'lodash/throttle';


const props = defineProps({
    lendees: Object,
    filters: Object
});

let search = ref(props.filters.search);

watch(search, throttle(function (value) {
    Inertia.get('/lendees', { search: value }, {
        preserveState: true,
        replace: true
    });
}, 250));
</script>