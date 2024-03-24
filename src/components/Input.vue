<template>
        <div>
        <div class="text-lg font-semibold flex flex-col text-start">
                <div :class=" title + ' flex'">
                {{ text }}
            </div>
                <label :for="Id" class="sr-only">{{ label }}</label>
                <input v-model="valueInput" :class="styling + ' bg-white border border-gray-200 hover:bg-gray-50 active:bg-gray-100 focus:bg-gray-200 rounded-md font-light px-3 py-1'" :type="type" name="" :placeholder="placeholder" :id="Id">
            </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        text: String,
        title: String,
        styling: String,
        type: String,
        placeholder: String,
        label: String,
        Id: String,
        value: String
    },
    data() {
        return {
            valueInput: this.value
        }
    }
};
</script>