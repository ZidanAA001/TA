<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="flex justify-between pb-5">
      <img :src="ikrama" alt="">
      <span v-if="collapsed">

      </span>
      <span v-else class="text-black font-normal">E-KRAMA</span>

      <span class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
        >
        <fa icon="fas fa-angle-double-left" style="color:#6B7280" />
      </span>
    </div>
    <div class="space-y-1">
      <Sidebarlink to="/dashboard" icon="fas fa-chart-pie" text="Dashboard" />
      <Sidebarlink to="#" icon="fas fa-coins" text="Kas" />
      <Sidebarlink to="/anggota" icon="fas fa-people-group" text="Anggota" />
      <Sidebarlink to="#" icon="fas fa-building" text="Divisi" />
      <Sidebarlink to="#" icon="fas fa-file" text="Dokumen" />
    </div>
  </div>
</template>

<script lang="ts">
import { collapsed, toggleSidebar, sidebarWidth } from '@/stores/state'
import Sidebarlink from './Sidebarlink.vue';
import { ikrama } from '../../assets';

interface SidebarItem {
  name: string;
  route: string;
}

export default {
  props: {},
  components: { Sidebarlink },
  data () {
    return { collapsed, toggleSidebar, sidebarWidth, ikrama }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: white;
  --sidebar-item-hover: rgb(240, 240, 240);
  --sidebar-item-active: rgb(232, 232, 232);
  --ck-sample-sidebar-width: 350px;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
</style>