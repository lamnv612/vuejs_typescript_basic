<template>
  <div class="order-item">
    <span class="order-name">{{ ITEM_NAME_MAP[order.id] }}</span>
    <span class="order-price">{{ order.unitPrice.toLocaleString() }} 円</span>
    
    <div class="order-quantity">
      <button @click="updateQuantity(-1)" :disabled="order.quantity <= 1">-</button>
      <span>{{ order.quantity }} 個</span>
      <button @click="updateQuantity(1)">+</button>
    </div>

    <span class="order-total">{{ total.toLocaleString() }} 円</span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import { ITEM_NAME_MAP } from '@/constants';
import { Order } from '@/types';

// 商品情報を受け取るための props
const props = defineProps<{
  order: Order;
}>();

/**
 * イベントを emit するための setup
 */
const emit = defineEmits<{
  (event: 'updateQuantity', quantity: number): void;
}>();

/**
 * 合計金額を計算する計算プロパティ
 */
const total = computed(() => props.order.unitPrice * props.order.quantity);

/**
 * 数量の増減を処理するメソッド
 */
const updateQuantity = (change: number) => {
  // 新しい数量を計算
  const newQuantity = props.order.quantity + change;

  // 1個以上に制限するため、数量が1未満にならないようにする
  if (newQuantity >= 1) {
    emit('updateQuantity', newQuantity);  // 親コンポーネントに新しい数量を通知
  }
};
</script>

<style scoped>
.order-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  border-radius: 4px;
}

.order-item:hover {
  background-color: #f0f0f0;
}

.order-name {
  flex: 0 0 200px;
  text-align: left;
}

.order-price,
.order-total {
  flex: 0 0 100px;
  text-align: center;
}

.order-quantity {
  flex: 0 0 200px;
  text-align: center;
}

.order-price { color: #3b82f6; }
.order-quantity { color: #6b7280; }
.order-total { color: #ef4444; }

.order-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-quantity button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 8px;
}

.order-quantity button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
