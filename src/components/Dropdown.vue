<template>
  <div>
    <ul v-show="list.open" class="sub-items">
        <li class="sub-item"
         v-for="(item, index) in list.subnav" :key="'item' + index">
          <i v-if="item.subnav" class="fas" :class="{'fa-angel-down':!item.open, 'fa-angel-up':item.open}"></i>
          <div class="title" @click="item.open = !item.open">
          {{ item.title }}
          </div>
          <Dropdown class="subnav" v-if="item.subnav" :list="item" />
        </li>
      </ul>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Dropdown',
  props: [
    'list'
  ]


}
</script>

<style lang="scss" scoped>
.sub-items {
  list-style: none;

  .sub-item {
    position: relative;
    color: white;
    background-color: grey;
    border-top: 1px solid;
    cursor: pointer;

    .subnav {
      padding-left: 20px;
    }
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