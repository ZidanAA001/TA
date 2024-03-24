<template>
  <div>
    <div>
      Struktur organisasi IKRAMA
    </div>
    <div>
      <ul id="navigation">
        <li v-for="(item, index) in navigation" :key="'item' + index">
          <i v-if="item.subnav" class="fas" :class="{'fa-angel-down':!item.open, 'fa-angel-up':item.open}"></i>
          <div class="title" @click="item.open = !item.open">
          {{ item.title }}
          </div>
          <Dropdown v-if="item.subnav" :list="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Datas } from '@/stores'
import Dropdown from '@/src/components/Dropdown.vue';

export default {

  computed: {
    navigation() {
      return this.$store.getters.navigation;
    }
  }
}
</script>

<style scoped>
#navigation {
  list-style: none;
  border-bottom: 1px solid;

  li {
    position: relative;
    color: grey;
    border-top: 1px solid;
    cursor: pointer;
  }

  .title {
    padding: 10px 0;
    text-indent: 20px;
  }

  i {
    position: absolute;
    top: 12px;
    right: 10px;
  }
}
</style>