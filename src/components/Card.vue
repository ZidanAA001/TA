<template>
    <div>
        <div :class="custom + ' bg-white divide-y divide-accent p-5'">
            {{ text }}
            <fa :icon style="color:#7BCC94" />
            <div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: String,
        custom: String,
        icon: String,
    },
})
</script>

<style scoped>

</style>./Dropdown.vue