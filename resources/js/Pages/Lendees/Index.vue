<template>

    <Head title="Lendees" />

    <div class="bg-white dark:bg-zinc-900">
        <div class="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-white/90 my-auto">
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
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8 lg:flex justify-between">
            <BreezeInput v-model="form.search" class="mt-1 block lg:w-96 w-full" type="text" placeholder="Search..." />
            <select v-model="form.status"
                class="block rounded-lg text-sm text-gray-700 border-gray-300 dark:bg-zinc-900 dark:border-none dark:text-white/80 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm mt-2 lg:mt-0 w-full lg:w-auto">
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
            <div class="overflow-hidden shadow-sm rounded-lg">
                <div class="p-6 bg-white dark:bg-zinc-900">
                    <table class="table-fixed w-full text-sm whitespace-nowrap">
                        <thead>
                            <tr class="uppercase text-left dark:text-white/90">
                                <th class="px-3">Name</th>
                                <th class="px-3">Address</th>
                                <th class="px-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lendee in lendees.data"
                                class="hover:bg-black/10 group dark:text-white/80 dark:hover:bg-white/10">
                                <td class="rounded-l-lg">
                                    <Link class="flex p-3" :href="route('lendees.show', lendee.id)">
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
                                    <span v-if="lendee.loan"
                                        class="px-2 inline-flex rounded-lg bg-green-200 text-green-800">
                                        Active</span>
                                    <span v-if="lendee.loan?.has_late_payment && filters.status === 'overdue'"
                                        class="text-red-800 rounded-full inline-flex mx-1 px-2 bg-red-200 place-items-center">
                                        {{ lendee.loan?.has_late_payment }}
                                    </span>
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
        lendees: Object
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
                this.$inertia.get('/lendees', pickBy(this.form), {
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
import throttle from 'lodash/throttle';
import pickBy from 'lodash/pickBy';
</script>