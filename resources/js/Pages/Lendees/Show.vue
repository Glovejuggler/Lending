<template >

    <Head>
        <title>
            {{ lendee.name }}
        </title>
    </Head>

    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    {{ lendee.name }}
                </h2>
                <div>
                    <Link as="button" v-if="!loan" :href="route('loans.create', lendee.id)" class="inline-flex cursor-pointer
                            items-center mx-2 px-4 py-2 bg-gray-800
                            border border-transparent rounded-md 
                            font-semibold text-xs text-white uppercase
                            tracking-widest hover:bg-gray-700 active:bg-gray-900
                            focus:outline-none focus:border-gray-900
                            focus:shadow-outline-gray transition ease-in-out duration-150">
                    Loan
                    </Link>
                    <Link as="button" :href="route('lendees.edit', lendee.id)" class="inline-flex cursor-pointer
                            items-center mx-2 px-4 py-2 bg-emerald-800
                            border border-transparent rounded-md 
                            font-semibold text-xs text-white uppercase
                            tracking-widest hover:bg-emerald-700 active:bg-emerald-900
                            focus:outline-none focus:border-emerald-900
                            focus:shadow-outline-gray transition ease-in-out duration-150">
                    Edit
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div class="lg:flex pt-12 max-w-7xl mx-auto px-3 lg:px-4">
        <div class="mx-4" :class="loan ? 'lg:w-2/3' : 'lg:w-full'">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <span class="uppercase font-bold block text-gray-800">{{ lendee.name }}</span>
                    <span class="">{{ lendee.address }}</span>

                    <div class="mt-8 flex" v-if="loan">
                        <div class="w-1/2">
                            <div>
                                <span class="text-sm uppercase font-bold text-gray-800 block">Interest
                                    Rate</span>
                                <span class="">{{ loan?.rate }}%</span>
                            </div>

                            <div class="mt-4">
                                <span class="text-sm uppercase font-bold text-gray-800 block">Term</span>
                                <span class="">{{ loan?.term }} months</span>
                            </div>

                            <div class="mt-4">
                                <span class="text-sm uppercase font-bold text-gray-800 block">Amortization</span>
                                <span class="">{{ loan?.amortization }}</span>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div>
                                <span class="text-sm uppercase font-bold text-gray-800 block">Principal</span>
                                <span class="">{{ loan?.principal.toLocaleString() }}</span>
                            </div>

                            <div class="mt-4">
                                <span class="text-sm uppercase font-bold text-gray-800 block">Interest</span>
                                <span class="">{{ loan?.interest.toLocaleString() }}</span>
                            </div>

                            <div class="mt-4">
                                <span class="text-sm uppercase font-bold text-gray-800 block">Receivable</span>
                                <span class="">{{ loan?.receivable.toLocaleString() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:w-1/3 mx-4 lg:mt-0 mt-4" v-if="loan">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200 flex">

                    <div class="w-full">
                        <span class="uppercase font-bold block text-gray-800">Maturity</span>
                        <span class="">{{ start_month }} to {{ end_month }}</span>

                        <div class="mt-8">
                            <span class="text-sm uppercase font-bold text-gray-800 block">Payments</span>
                            <span class="">{{ Math.round(loan.paymentm).toLocaleString() }}</span>
                        </div>

                        <div class="mt-4">
                            <span class="text-sm uppercase font-bold text-gray-800 block">Principal</span>
                            <span class="">{{ Math.round(loan.principalm).toLocaleString() }}</span>
                        </div>

                        <div class="mt-4">
                            <span class="text-sm uppercase font-bold text-gray-800 block">Interest</span>
                            <span class="">{{ Math.round(loan.interestm).toLocaleString() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="lg:mt-8 mt-4 max-w-7xl mx-auto px-7 lg:px-8 pb-4" v-if="loan">
        <div class="bg-white overflow-x-auto shadow-sm rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <table class="table-auto w-full text-left text-sm">
                    <thead>
                        <tr class="uppercase">
                            <th class="p-2">Date</th>
                            <th class="p-2">Date paid</th>
                            <th class="p-2">Principal</th>
                            <th class="p-2">Interest</th>
                            <th class="p-2">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="payment in loan.payments" class="hover:bg-neutral-200 group">
                            <td class="rounded-l-lg">
                                <div class="flex justify-between">
                                    <span class="p-2">{{ format_dateMDY(payment.month) }}</span>
                                    <Link as="button" :href="route('payment.edit', payment.id, loan.id)"
                                        class="invisible group-hover:visible pr-4" preserve-scroll>
                                    <i class="bx bx-edit hover:text-green-500 text-lg"></i>
                                    </Link>
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="flex justify-between">
                                    {{ format_dateMDY(payment.date_paid) }}
                                    <span class="text-green-700 pr-8">{{ payment.payment?.toLocaleString() }}</span>
                                </div>
                            </td>
                            <td class="p-2">
                                {{ payment.payment ? (payment.payment - Math.round(loan.interestm)).toLocaleString() :
                                        ''
                                }}
                            </td>
                            <td class="p-2">
                                {{ payment.payment - Math.round(loan.interestm) >= 0 ?
                                        Math.round(loan.interestm).toLocaleString() :
                                        ''
                                }}
                            </td>
                            <td class="rounded-r-lg p-2">{{ payment.payment ? payment.balance?.toLocaleString() : '' }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-end font-bold uppercase">Remaining balance: P{{ bal.toLocaleString() }}</div>
            </div>
        </div>
    </div>

    <div class="my-8 mx-4 flex justify-center" v-else>
        <span class="text-gray-400">No loan record</span>
    </div>
</template>


<script>
import BreezeButton from '@/Components/Button.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import moment from 'moment';

export default {
    components: {
        Head,
        Link,
        BreezeButton,
    },
    props: {
        lendee: Object,
        loan: Object,
        bal: Number,
    },
    data(props) {
        return {
            start_month: this.format_dateMDY(props.loan?.payments[0]?.month),
            end_month: this.format_dateMDY(props.loan?.payments[props.loan?.payments?.length - 1]?.month),
        }
    },
    methods: {
        format_dateMY(value) {
            if (value) {
                return moment(String(value)).format('MMMM YYYY')
            }
        },
        format_dateMDY(value) {
            if (value) {
                return moment(String(value)).format('MMMM D, YYYY')
            }
        }
    }
}

</script>