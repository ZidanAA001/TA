<template>
    <div class="py-1">
        <button :class= "styling">{{ text }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    props: {
        text: String,
        styling: String
    }
})
</script>