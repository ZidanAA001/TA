<template>
    <div>
        <nav class="flex gap-3 items-center">
            <ul class="inline-flex -space-x-px text-sm mr-4" >
                <li v-for="(item, index) in divStore.pagination" :key="index">
                    <a @click="TogglePagination(item.url, item.label)" class="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><p v-html="item.label"></p></a>
                </li>
            </ul>
            <ul class="inline-flex -space-x-px text-sm mr-4">
                <select v-model="divStore.parameter.per_page" @change="changeSize" class="bg-gray-700 border border-gray-600 text-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
            </ul>
        </nav>  
    </div>
</template>

<script lang="ts">
import { useDivStore } from '../stores/divStore'

export default {
 data (){
    return {
    divStore: useDivStore()
        }
    },
    methods: {
        changeSize() {
            this.divStore.getData().then((res:any) => {
            this.divStore.list = res.data
            this.divStore.pagination  =  res.links
    })
},
    TogglePagination(url: string | null, pageLabel: string) {
        if (url) {
            if (pageLabel.toLowerCase() ===  "next &raquo;") {
                this.divStore.parameter.page += 1
        } else if (pageLabel.toLowerCase() === "&laquo; Prev") {
            this.divStore.parameter.page = Math.max(1, this.divStore.parameter.page - 1)
    } else {
        const pageNumber =  parseInt(pageLabel)
        this.divStore.parameter.page = pageNumber
    }
        this.divStore.getData().then((res:any) => {
            this.divStore.list = res.data
            this.divStore.pagination = res.links
        });
    }
},
    },
    mounted() {
    try {
    this.divStore.getData().then((res: any) => {
    this.divStore.list = res.data
    this.divStore.pagination = res.links
    })
    } catch (err) {
        console.log(err)
        throw(err)
    }
}
}
</script>

<style scoped>

</style>