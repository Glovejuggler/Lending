<template>

    <Head title="Lendees" />

    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-start">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    {{ lendees[0].address }}
                </h2>
            </div>
        </div>
    </div>

    <div class="py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <table class="table-fixed w-full text-sm whitespace-nowrap">
                        <thead>
                            <tr class="uppercase text-left">
                                <th class="p-3">Name</th>
                                <th class="p-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lendee in lendees" class="hover:bg-neutral-200 group">
                                <td class="rounded-l-lg">
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
                                    {{ lendee.name }}
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
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    lendees: Object,
});
</script>