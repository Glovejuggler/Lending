<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <SidebarMenuAkahon />

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
import SidebarMenuAkahon from '@/Components/Sidebar-menu-akahon.vue';

export default {
    components: {
        SidebarMenuAkahon
    },
    props: {

    },
}
</script>