<template>
    <div class="pb-5 flex justify-end space-x-2">
        <button data-modal-target="crud-modal" type="submit" @click="" class="p-2.5 h-10 text-xs font-bold text-white bg-primary rounded-lg border border-primary hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-primary dark:hover:bg-green-600 dark:focus:ring-green-700">
              <fa icon="fas fa-plus" />
              </button>
        <form class="flex items-center" @submit.prevent="toggleSearch">   
            <button type="submit" class="p-2.5 text-xs font-bold text-white bg-primary rounded-lg border border-primary hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-primary dark:hover:bg-green-600 dark:focus:ring-green-700">
                <fa icon="magnifying-glass" />
                <span class="sr-only">Search</span>
            </button>
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none text-gray">
            <fa icon="fas fa-magnifying-glass" />
        </div>
        <div class="pl-2">
            <input v-model="Data.parameter.search" type="text" id="simple-search" class="border-2 border-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari disini...">
        </div>
    </div>
        </form>
    </div>
</template>

<script lang="ts">
import { useDivStore } from '../stores/divStore';


export default {
    data() {
        return {
            Data: useDivStore()
        }
    } ,
    methods: {
        toggleSearch() {
        this.Data.getData().then((res:any) => {
        this.Data.list = res.data.data.data
        this. Data.pagination = res.links
        
    })
}
    }
}

</script>

<style scoped>

</style>