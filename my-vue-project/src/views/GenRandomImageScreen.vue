<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { generateRandomNumber } from "@/utils";
import MyImage from "@/components/MyImage.vue";

/**
 * イメージのURL
 * https://picsum.photos/id/<image_id>/<width>/<height>
 */
const IMAGE_SERVER = "https://picsum.photos/id";
const WIDTH = 360;
const HEIGHT = 240;
const DEFAULT_IMG = `${IMAGE_SERVER}/10/${WIDTH}/${HEIGHT}`;

const src = ref(DEFAULT_IMG);
/**
 * 画像のURLをリフレッシュする関数です。
 * ランダムなIDを生成し、それを使って新しい画像URLを作成し、`src` の値を更新します。
 * 
 * `src` は `ref` 型で、更新されたURLを保持します。
 * 
 * @example
 * refreshSrc();  // `src` の値が新しい画像URLに更新されます。
 */
const refreshSrc = (() => {
  const id = generateRandomNumber();
  const url = `${IMAGE_SERVER}/${id}/${WIDTH}/${HEIGHT}`;
  src.value = url;
});

onMounted(() => {
  refreshSrc();
})
</script>

<template>
  <h1>
    Toggle Button
  </h1>

  <MyImage :src="src" @upload="refreshSrc" />    
</template>
