<template>
    <div>
        <div class="min-h-screen bg-gray-100" style="transition: all 0.5s ease">
            <SidebarMenuAkahon />
            <div class="md:hidden flex">Lamao</div>
            <!-- Page Content -->
            <main id="main">
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
    }
}
</script>