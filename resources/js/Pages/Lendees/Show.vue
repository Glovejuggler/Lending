<template >

    <Head>
        <title>
            {{ lendee.name }}
        </title>
    </Head>

    <div class="bg-white shadow">
        <div class="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
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

    <div class="lg:flex pt-12 max-w-screen-2xl mx-auto px-3 lg:px-4">
        <div class="mx-4 group" :class="loan ? 'lg:w-2/3' : 'lg:w-full'">
            <div class="bg-white overflow-hidden shadow-sm rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="flex justify-between">
                        <div>
                            <span class="uppercase font-bold block text-gray-800">{{ lendee.name }}</span>
                            <span class="">{{ lendee.address }}</span>
                        </div>
                        <div v-if="loan">
                            <Link class="text-green-500 items-center p-2 inline-flex hover:bg-gray-300 rounded-full"
                                :href="'#'">
                            <i class="bx bx-edit lg:invisible group-hover:lg:visible"></i>
                            </Link>

                            <Link class="text-red-500 items-center p-2 inline-flex hover:bg-gray-300 rounded-full"
                                :href="'#'">
                            <i class="bx bx-trash lg:invisible group-hover:lg:visible"></i>
                            </Link>
                        </div>
                    </div>

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

    <div class="lg:mt-8 mt-4 max-w-screen-2xl mx-auto px-7 lg:px-8" v-if="loan">
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
                                    <span class="p-2"
                                        :class="isLate(payment.month) && payment.payment == null ? 'text-red-500' : ''">{{
                                                format_dateMDY(payment.month)
                                        }}</span>
                                    <Link as="button" :href="route('payment.edit', payment.id, loan.id)"
                                        class="invisible group-hover:visible pr-4" preserve-scroll>
                                    <i class="bx bx-edit hover:text-green-500 text-lg"></i>
                                    </Link>
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="flex justify-between">
                                    <div>
                                        {{ format_dateMDY(payment.date_paid) }}
                                        <span v-if="payment.is_late"
                                            class="text-red-800 bg-red-200 px-2 rounded-lg">Late</span>
                                    </div>
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
                <div v-if="bal > 0" class="flex justify-end font-bold uppercase">Remaining balance: P{{
                        bal.toLocaleString()
                }}</div>
            </div>
        </div>
    </div>

    <div class="lg:mt-8 mt-4 max-w-screen-2xl mx-auto px-7 lg:px-8 pb-4 group" v-if="loan">
        <div class="bg-white overflow-x-auto shadow-sm rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <div class="flex justify-between">
                    <span class="font-bold">Others</span>
                    <form @submit.prevent="submit">
                        <label class="flex">
                            <span class="sr-only">Choose files</span>
                            <input type="file" name="file" accept="image/*" @input="fileform.file = $event.target.files"
                                class="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gray-50 file:text-gray-700
                                hover:file:bg-gray-100
                                " multiple />
                            <button :disabled="fileform.processing" type="submit"
                                class="text-sm uppercase rounded-lg text-white font-semibold bg-gray-800 px-3">Upload</button>
                        </label>
                    </form>
                </div>
                <div class="lg:flex lg:flex-wrap mt-4">
                    <div v-for="pic in pics" class="basis-1/4 p-1 cursor-pointer
                        [&>div>div:nth-child(3)]:hover:z-30
                        [&>div>div:nth-child(3)]:hover:delay-500
                        [&>div>div:nth-child(3)]:hover:translate-x-0
                        [&>div>img]:hover:scale-125
                        [&>div>img]:hover:opacity-75
                        rounded-lg">
                        <div class="relative h-48 rounded-lg overflow-hidden content-center">
                            <img :src="`../${pic.path}`"
                                class="z-20 absolute h-full w-full bg-white object-cover rounded-lg ease-in-out duration-300"
                                @click.self="toggleModal(pic.path, pic.id)">
                            <div class="z-10 absolute bg-black w-full h-full">
                            </div>
                            <div class="absolute z-0 grid w-full h-full translate-x-1/4 ease-in-out duration-300"
                                @click.self="toggleModal(pic.path, pic.id)">
                                <Link class="uppercase text-white font-bold place-self-end
                                    inline-flex p-2 bg-red-600 hover:bg-red-500
                                    rounded-full text-white m-3" :href="route('files.destroy', pic.id)" method="delete"
                                    as="button" preserve-scroll>
                                <i class="bx bx-trash text-lg"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="my-8 mx-4 flex justify-center" v-else>
        <span class="text-gray-400">No loan record</span>
    </div>

    <div class="pb-4 max-w-screen-2xl mx-auto lg:px-8 flex justify-end" v-if="loan?.is_fully_paid">
        <Link :href="'#'" as="button"
            class="text-red-500 text-xs uppercase font-semibold p-2 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white ease-out duration-300"
            preserve-scroll>idk what to put here lmao, shown when loan is fully paid to settle(?) the loan</Link>
    </div>

    <ShowImage ref="showImageModal" />
</template>


<script>
import BreezeButton from '@/Components/Button.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import moment from 'moment';
import ShowImage from '@/Components/ShowImage.vue';

export default {
    components: {
        Head,
        Link,
        BreezeButton,
        ShowImage,
    },
    props: {
        lendee: Object,
        loan: Object,
        bal: Number,
        pics: Object,
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
        },
        isLate(value) {
            if (value) {
                return moment().diff(moment(String(value)), 'days') >= 1
            }
        },
        toggleModal(value, fileId) {
            this.$refs.showImageModal.toggleModal(value, fileId);
        }
    },
    setup(props) {
        const fileform = useForm({
            lendee_id: props.lendee.id,
            loan_id: props.loan?.id,
            file: [],
        })

        function submit() {
            fileform.post('/files', {
                preserveScroll: true,
                preserveState: false,
                onSuccess: () => fileform.reset('file'),
            });
        }

        return { fileform, submit }
    }
}

</script>