<script setup lang="ts">
import { reactive } from 'vue';
import Order from "@/components/shopping/Order.vue";
import { ITEM } from '@/constants';
import { Order as OrderType } from '@/types';

const orders = reactive<OrderType[]>([
  {
    id: ITEM.COFFEE,
    unitPrice: 250,
    quantity: 3
  },
  {
    id: ITEM.BREAD,
    unitPrice: 150,
    quantity: 4
  },
  {
    id: ITEM.ICE,
    unitPrice: 50,
    quantity: 10
  }
])
</script>

<template>
  <h1>
    ご注文は！
  </h1>

  <Order v-model="orders" />    
</template>
