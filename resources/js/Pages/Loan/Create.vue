<template>

    <Head title="Loan" />

    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 my-auto">
                    Loan for {{ lendee.name }}
                </h2>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form @submit.prevent="form.post(route('loans.store'))">
                        <div>
                            <BreezeLabel for="principal" value="Principal" />
                            <BreezeInput autofocus id="principal" type="text" class="mt-1 block w-full lg:w-96"
                                v-model="form.principal" />
                            <div v-if="errors.principal" class="text-red-600">{{ errors.principal }}</div>
                        </div>

                        <div class="mt-5">
                            <BreezeLabel for="rate" value="Rate (%)" />
                            <BreezeInput id="rate" type="text" class="mt-1 block w-full lg:w-96" v-model="form.rate" />
                        </div>

                        <div class="mt-5">
                            <BreezeLabel for="term" value="Term" />
                            <BreezeInput id="term" type="text" class="mt-1 block w-full lg:w-96" v-model="form.term" />
                        </div>

                        <div class="mt-5">
                            <BreezeLabel for="amortization" value="Amortization" />
                            <BreezeInput id="amortization" type="text" class="mt-1 block w-full lg:w-96"
                                v-model="form.amortization" />
                        </div>

                        <div class="mt-5">
                            <BreezeLabel for="maturity" value="Maturity date" />
                            <BreezeInput id="maturity" type="date" class="mt-1 block w-full lg:w-96"
                                v-model="form.maturity" />
                        </div>

                        <div>
                            <BreezeButton class="mt-4" :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing">Loan</BreezeButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BreezeButton from '@/Components/Button.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeInput from '@/Components/Input.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        BreezeButton,
        BreezeLabel,
        BreezeInput,
    },
    setup(props) {
        const form = useForm({
            lendee_id: props.lendee.id,
            principal: '',
            rate: '',
            term: '',
            amortization: '',
            maturity: ''
        })

        return { form }
    },
    props: {
        lendee: Object,
        errors: Object
    }
}
</script>