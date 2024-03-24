<template>
  <div class="min-h-screen">
    <div class="p-10">
      <div class="border-b-2 border-primary bg-white">
        <div class="text-start text-lg font-bold p-2">
          Daftar Anggota
        </div>
      </div>
      <div class="bg-white p-5">
        <div class="text-start mr-56">
                        <button @click="toggleModal" styling="text-xs text-primary border border-transparent">test</button>
                        <!-- Modal component -->
                        <Modal v-if="showModal">
                            <!-- Content of your modal -->
                            <div class="space-y-5">
                                <h2>Kamu Lupa Password?</h2>
                                <input title="text-xs" text="Password Baru" />
                                <input title="text-xs" text="Konfirmasi Password Baru" />
                                <button @click="toggleModal">close</button>
                            </div>
                        </Modal>
                    </div>  
        <Searchbar></Searchbar>
        <div>
          <ElTable :data="list" height="250" style="width: 100%">
            <ElTableColumn prop="index" label="No" width="120" />
            <ElTableColumn prop="nm_anggota" label="Nama Lengkap" width="120" />
            <ElTableColumn prop="tgl_bergabung" label="Tanggal Bergabung" width="120" />
            <ElTableColumn prop="name" label="Divisi" width="120" />
            <ElTableColumn prop="name" label="Jabatan" width="120" />
            <ElTableColumn prop="address" label="Aksi">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                  >Edit</el-button
                >
                <el-button
                  size="small"
                  type="danger"
                  @click="deleteData(list.id)"
                  >Delete</el-button>
                >
              </template>
            </ElTableColumn>
          </ElTable>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '../../components/Table.vue';
import Searchbar from '../../components/Searchbar.vue';
import Pagination from '../../components/Pagination.vue';
import { useDivStore } from '../../stores/divStore';
import { ElTable, ElTableColumn, ElButton } from 'element-plus';
import Modal from '../../components/Modal.vue';
export default defineComponent({
  components: {
    Table,
    Searchbar,
    Pagination,
    Modal,
    ElTable,
    ElTableColumn,
    ElButton
  },
  data() {
    return {
      store: useDivStore(),
      showModal: useDivStore().showModal,
      toggleModal: useDivStore().toggleModal,
      id: useDivStore(),
      list: []
  }
},
mounted() {
  try {
    this.store.getData().then((res:any) => {
    this.list = res
    })
  } catch (err) {
    console.log(err);
    throw(err)
  }
},
methods:{
  async getData() {
    try {
      this.store.getData().then((res:any) => {
      this.list = res
    })
    
  } catch (error) {
    console.error('Error saat fetching data:', error);
  }
},
  async postData() {
    try {
      this.store.postData()
    } catch {
      alert("Gagal menambahkan data")
    }
  },
  async deleteData(id:any) {
    try {
      this.store.deleteData(id)
    } catch (err) {
      alert ("gagal menghapus data")
    }
  }
},

});
</script>


<style scoped>

</style>
