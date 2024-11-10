<template>
  <div class="order-sheet">
    <h2 class="title">注目票</h2>

    <!-- 商品リストヘッダー -->
    <div class="order-header">
      <span class="header-item order-name">商品名</span>
      <span class="header-item order-price">単価</span>
      <span class="header-item order-quantity">数量</span>
      <span class="header-item order-total">合計</span>
    </div>
    
    <!-- 商品リスト -->
    <div class="order-list">
      <Item 
        v-for="(order, index) in orders" 
        :key="index + order.id"
        :order="order" 
        @updateQuantity="updateQuantity(index, $event)"
      />
    </div>

    <!-- 注文情報の合計 -->
    <div>
      <div class="order-summary">
        <span>購入数量</span>
        <span>{{ totalQuantity }}</span>
      </div>
      <div class="order-summary">
        <span>合計金額</span>
        <span>{{ totalAmount.toLocaleString() }}円</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineModel } from 'vue';
import Item from '@/components/shopping/Item.vue';
import { Order } from '@/types';

/**
 * 定義 defineModel で orders を受け取る
 */
const orders = defineModel<Order[]>({ default: [] });

/**
 * 合計数量を計算する
 */
const totalQuantity = computed(() => 
  orders.value.reduce((total, order) => total + order.quantity, 0)
);

/**
 * 合計金額を計算する
 */
const totalAmount = computed(() => 
  orders.value.reduce((total, order) => total + order.unitPrice * order.quantity, 0)
);

/**
 * 数量を更新する処理
 */
const updateQuantity = (index: number, newQuantity: number) => {
  // ordersの指定したindexの数量を直接更新
  orders.value[index].quantity = newQuantity;
};
</script>

<style scoped>
.order-sheet {
  width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 16px;
}

/* 商品リストヘッダーのスタイル */
.order-header,
.order-item {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 8px;
}

/* ヘッダーと商品アイテムの幅を固定 */
.header-item {
  text-align: center;
}

.order-name {
  flex: 0 0 200px;  /* 商品名の幅を300pxに固定 */
  text-align: left;  /* 商品名は左寄せ */
}

.order-price,
.order-total {
  flex: 0 0 100px;  /* 各項目の幅を100pxに固定 */
  text-align: center;  /* 数値や情報を中央に配置 */
}
.order-quantity {
  flex: 0 0 200px;  /* 各項目の幅を100pxに固定 */
  text-align: center;  /* 数値や情報を中央に配置 */
}
.order-list {
  margin-bottom: 16px;
}

.order-summary {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 8px;
}
</style>
