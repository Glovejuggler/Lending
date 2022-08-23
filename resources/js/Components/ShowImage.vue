<template>
    <div>
        <div v-if="showModal" class="fixed inset-0 z-50 w-full h-screen justify-center items-center flex"
            @click.self="toggleModal()">
            <div class="fixed  right-0.5 top-0.5">
                <button class="bg-white rounded-full inline-flex p-1 m-4 hover:opacity-90" @click="toggleModal()"><i
                        class="bx bx-x text-black text-3xl"></i></button>
            </div>
            <div class="relative max-h-screen w-auto max-w-4xl">
                <!--body-->
                <div class="relative overflow-auto max-h-screen">
                    <img :src="`../${shownImage}`" alt="" class="relative w-auto h-5/6 object-contain">
                </div>
            </div>
        </div>
        <div v-if="showModal" class="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
export default {
    name: "show-image",
    data() {
        return {
            showModal: false,
            shownImage: '',
        }
    },
    methods: {
        toggleModal: function (value) {
            this.showModal = !this.showModal;
            if (value) {
                this.shownImage = value;
            }
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                this.showModal = false;
            }
        });
    }
}
</script>