<template>
    <div>
        {{ userStore.name }}
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    reactive,
    toRefs,
    onBeforeMount,
    onMounted,
    watchEffect,
    computed,
} from 'vue';
import { useUserStore } from '@/Store/user';
const userStore = useUserStore();
userStore.updateName('Pina');
</script>
<style scoped lang="less"></style>
