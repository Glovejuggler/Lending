<template>

    <Head>
        <title>
            {{ lendee.name }} - History
        </title>
    </Head>

    <!-- Header -->
    <div class="bg-white shadow">
        <div class="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    Loan history of {{ lendee.name }}
                </h2>
            </div>
        </div>
    </div>

    <div v-for="(loan, index) in history" class="mb-8">
        <div class="mt-6 max-w-screen-2xl mx-auto px-6 lg:px-8 text-md font-bold">
            <h3 class="text-black/75">{{ ordinal(index + 1) + ' Loan' }}</h3>
        </div>
        <!-- Loan History Information -->
        <div class="lg:flex mt-2 max-w-screen-2xl mx-auto px-6 lg:px-8">
            <div class="group lg:pr-2" :class="loan ? 'lg:w-2/3' : 'lg:w-full'">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div>
                            <span class="uppercase text-gray-800 font-bold block">Loan Information</span>
                            <span class="block text-black/60"
                                v-if="loan.amortization / loan.term == 1 && loan.payments.length > 1">Monthly</span>
                            <span class="block text-black/60"
                                v-else-if="loan.amortization / loan.term == 2">Semi-monthly</span>
                            <span class="block text-black/60" v-if="loan.payments.length == 1">One-time payment</span>
                        </div>

                        <div class="flex mt-8">
                            <div class="w-1/2">
                                <div>
                                    <span class="text-sm uppercase font-bold text-gray-800 block">Interest
                                        Rate</span>
                                    <span class="">{{ loan?.rate }}%</span>
                                </div>

                                <div class="mt-4">
                                    <span class="text-sm uppercase font-bold text-gray-800 block">Term</span>
                                    <span class="">{{ loan?.term }} month{{ loan?.term > 1 ? 's' : '' }}</span>
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

            <!-- Maturity -->
            <div class="lg:w-1/3 lg:pl-2 lg:mt-0 mt-4" v-if="loan">
                <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200 flex">

                        <div class="w-full">
                            <span class="uppercase font-bold block text-gray-800">Maturity</span>
                            <span class="">{{ format_date(loan.payments[0].month) }} to {{
                                    format_date(loan.payments[loan.payments.length - 1].month)
                            }}</span>

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

        <!-- Payments -->
        <div class="lg:mt-8 mt-4 max-w-screen-2xl mx-auto px-6 lg:px-8">
            <div class="bg-white overflow-x-auto shadow-sm rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h4 class="uppercase text-gray-800 font-bold mb-4">Payments</h4>
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
                            <tr v-for="payment in loan.payments" class="hover:bg-black/[0.1] group cursor-pointer">
                                <td class="rounded-l-lg">
                                    <div class="flex justify-between">
                                        <span class="p-2"
                                            :class="isLate(payment.month) && payment.payment == null ? 'text-red-500' : ''">{{
                                                    format_date(payment.month)
                                            }}</span>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="flex justify-between">
                                        <div>
                                            {{ format_date(payment.date_paid) }}
                                            <span v-if="payment.is_late"
                                                class="text-red-800 bg-red-200 px-2 rounded-lg mr-1">Late</span>
                                            <span v-if="payment.payment && payment.payment < Math.round(loan.paymentm)"
                                                class="text-red-800 bg-red-200 px-2 rounded-lg mr-1">Short</span>
                                        </div>
                                        <span class="text-green-700 pr-8">{{
                                                payment.payment?.toLocaleString()
                                        }}</span>
                                    </div>
                                </td>
                                <td class="p-2">
                                    {{ payment.payment ?
                                            (payment.payment - Math.round(loan.interestm)).toLocaleString() : ''
                                    }}
                                </td>
                                <td class="p-2">
                                    {{ payment.payment - Math.round(loan.interestm) >= 0 ?
                                            Math.round(loan.interestm).toLocaleString() : ''
                                    }}
                                </td>
                                <td class="rounded-r-lg p-2">
                                    {{ payment.payment ?
                                            payment.balance?.toLocaleString() : ''
                                    }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import moment from "moment";

export default {
    components: {
        Head,
    },
    props: {
        history: Object,
        lendee: Object
    },
    methods: {
        format_date(value) {
            if (value) {
                return moment(String(value)).format('MMMM D, YYYY')
            }
        },
        isLate(value) {
            if (value) {
                return moment().diff(moment(String(value)), 'days') >= 1
            }
        },
        ordinal(i) {
            var j = i % 10,
                k = i % 100;
            if (j == 1 && k != 11) {
                return i + "st";
            }
            if (j == 2 && k != 12) {
                return i + "nd";
            }
            if (j == 3 && k != 13) {
                return i + "rd";
            }
            return i + "th";
        }
    }
}
</script>