<template>
    <div class="m-5 space-y-5 min-h-screen">
        <div class="pt-5">
            <div class="bg-[rgb(231,242,235)] rounded-md">
                <div class="grid grid-cols-2 space-x-2 p-5">
                    <div class="shadow-md">
                        <Card text="Pengeluaran Kas" custom="rounded-md" icon="fas fa-file-invoice-dollar" />     
                    </div>
                    <div class="shadow-md">
                        <Card text="Pemasukan Kas" custom="rounded-md" icon="fas fa-money-check-dollar" />     
                    </div>
                </div>
            </div>
        </div>
            <div class="center">
                <Card text="Total kas" custom="rounded-md" icon="fas fa-sack-dollar" />
            </div>
        <div class="bg-[#E7F2EB] rounded-md">
            <div class="grid grid-cols-2 space-x-2 p-5">
                <div class="shadow-md">
                    <Card text="Jumlah Divisi" custom="rounded-md" icon="fas fa-layer-group" />     
                </div>
                <div class="shadow-md">
                    <Card text="Jumlah Anggota" custom="rounded-md" icon="fas fa-users-rays" />     
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'

export default defineComponent({
    components: {
        Card,
    }
})
</script>

<style scoped>

</style>