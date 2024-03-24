<template>
    <div>
        <router-link :to="to" class="link" :class="{ active: isActive }">
        <i class="icon"><fa :icon style="color:#6B7280" /></i>
            <transition name="fade">
                <span class="text-gray font-normal text-sm" v-if="!collapsed">
                    {{ text }}
                    <slot />
                </span>
            </transition>
        </router-link>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { collapsed } from '@/stores/state';

export default {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true },
        text: { type: String, required: true },
    },
    data(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return {  isActive, collapsed }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity:  0;
}

.link {
  display: flex;  
  align-items: center;

  cursor: pointer;
  position: relative;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link.active {
    background-color: var(--sidebar-item-active);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>