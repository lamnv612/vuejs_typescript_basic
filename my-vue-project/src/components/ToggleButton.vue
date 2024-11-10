<template>
  <button @click="toggle" class="toggle-button">
    <img :src="currentImage" alt="Toggle Image" class="toggle-image" />
    <span>{{ currentLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 画像ファイルのインポート
import BtnOn from "@/assets/images/toggle/btn_on.png";
import BtnOff from "@/assets/images/toggle/btn_off.png";

/**
 * トグルの状態を保持する ref
 */
const toggled = ref(false);

/**
 * トグルの状態を切り替える関数
 */
const toggle = () => {
  toggled.value = !toggled.value;
};

/**
 * ラベルと画像の定義
 */
const LABEL = {
  ON: "通知 ON",  // トグルが ON のときのラベル
  OFF: "通知 OFF" // トグルが OFF のときのラベル
}

const IMAGE = {
  ON: BtnOn,   // トグルが ON のときの画像
  OFF: BtnOff  // トグルが OFF のときの画像
}

/**
 * 現在のテキストを計算するコンピューテッドプロパティ
 */
const currentLabel = computed(() => (toggled.value ? LABEL.ON : LABEL.OFF));

/**
 * 現在の画像のパスを計算するコンピューテッドプロパティ
 */
const currentImage = computed(() => (toggled.value ? IMAGE.ON : IMAGE.OFF));
</script>

<style scoped>
.toggle-button {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.5rem;
}

.toggle-image {
  width: 3em;
  height: 3em;
  margin-right: 0.5rem;
}
</style>

