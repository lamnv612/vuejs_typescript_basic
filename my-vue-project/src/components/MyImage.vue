<template>
  <div class="random-image">
    <h2>Random Images</h2>
    <img :src="src" alt="Random Image" class="random-image-img" />
    <div class="image-src"><code>{{ src }}</code></div>
    <button @click="emit('upload')">イメージを切り替える</button>
  </div>
</template>

<script setup lang="ts">

/**
 * コンポーネントのプロパティを定義する部分です。
 * `src` プロパティはオプションで、指定されなかった場合にはデフォルトの画像URLを使用します。
 * 
 * @example
 * <MyComponent src="https://example.com/image.jpg" />
 */
const props = withDefaults(
  defineProps<{
    src?: string;  // 画像のURLを指定するためのプロパティ。デフォルト値は指定されていない場合、`"https://picsum.photos/id/1/360/240"` です。
  }>(),
  {
    src: "https://picsum.photos/id/1/360/240",  // デフォルトの画像URL
  }
);
// scriptの中に、propsを使わない場合、「withDefaults(」だけで大丈夫です。

/**
 * `upload` イベントを定義する部分です。
 * このイベントは、コンポーネントから親コンポーネントに対して画像のアップロードが完了したことを通知するために使用されます。
 * 
 * @example
 * emit("upload");
 */
const emit = defineEmits<{
  (e: "upload"): void;  // `upload` イベントが発火することを通知
}>();

</script>

<style scoped>
.random-image {
  text-align: center;
}

.image-src {
  margin-bottom: 24px;
}

.random-image-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin: 10px 0;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
}

button:hover {
  background-color: #35495e;
}
</style>
