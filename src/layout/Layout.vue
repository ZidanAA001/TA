<template>
    <div>
        <Sidebar />
            <div class="pl-10">
                <Suspense>
                    <template #default>
                            <router-view></router-view>
                    </template>
                    <template #fallback>
                        Load...
                    </template>
                </Suspense>
            </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';

export default defineComponent({
    components: { Footer, Sidebar },
})
</script>

<style scoped>

</style>