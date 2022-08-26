<template>

    <Head title="Lendees" />

    <div class="bg-white shadow">
        <div class="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-start">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    {{ subsidiary }}
                </h2>
            </div>
        </div>
    </div>

    <div class="pt-6">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8 lg:flex justify-between">
            <BreezeInput v-model="form.search" class="mt-1 block lg:w-96 w-full" type="text" placeholder="Search..." />
            <select v-model="form.status"
                class="block rounded-lg text-sm text-gray-700 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2 lg:mt-0 w-full lg:w-auto">
                <option value="" selected>All</option>
                <option value="active">Active loans</option>
                <option value="inactive">No active loans</option>
                <option value="overdue">Overdue payments</option>
                <option value="dueToday">Payments due today</option>
            </select>
        </div>
    </div>

    <div class="py-4">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
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
                            <tr v-for="lendee in lendees.data" class="hover:bg-neutral-200 group">
                                <td class="rounded-l-lg">
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
                                    {{ lendee.name }}
                                    </Link>
                                </td>
                                <td class="rounded-r-lg">
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
                                    <span v-if="lendee.loan"
                                        class="px-2 inline-flex rounded-lg bg-green-200 text-green-800">
                                        Active</span>
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

<script>
export default {
    props: {
        filters: Object,
        lendees: Object,
        subsidiary: String
    },
    data() {
        return {
            form: {
                search: this.filters.search,
                status: this.filters.status ?? "",
            }
        }
    },
    watch: {
        form: {
            deep: true,
            handler: throttle(function () {
                this.$inertia.get(`/subsidiaries/${this.subsidiary}`, pickBy(this.form), {
                    preserveState: true,
                    preserveScroll: true,
                    replace: true
                });
            }, 150),
        }
    }
}
</script>

<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Pagination from '@/Components/Pagination.vue';
import BreezeInput from '@/Components/Input.vue';
import { ref, watch } from "vue";
import { Inertia } from '@inertiajs/inertia';
import throttle from 'lodash/throttle';
import pickBy from 'lodash/pickBy';
</script>