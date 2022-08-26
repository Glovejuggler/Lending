<template>

    <Head>
        <title>{{ lendee.name }}</title>
    </Head>

    <div class="bg-white shadow">
        <div class="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 my-auto">
                Edit
            </h2>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form @submit.prevent="form.put(route('lendees.update', lendee.id))">
                        <div>
                            <BreezeLabel for="name" value="Name" />
                            <BreezeInput id="name" type="text" class="mt-1 block w-96" v-model="form.name" />
                        </div>

                        <div class="mt-5">
                            <BreezeLabel for="address" value="Address" />
                            <BreezeInput id="address" type="text" class="mt-1 block w-96" v-model="form.address" />
                        </div>

                        <div>
                            <BreezeButton class="mt-4" :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing">Update</BreezeButton>
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
        BreezeInput
    },
    setup(props) {
        const form = useForm({
            name: props.lendee.name,
            address: props.lendee.address,
        })

        return { form }
    },
    props: {
        lendee: Object
    }
}
</script>