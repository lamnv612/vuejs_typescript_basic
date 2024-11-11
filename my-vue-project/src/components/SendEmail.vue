<template>
  <h2>
    <code class="form-display">{{ form.email }}</code><br />
    <code class="form-display">{{ form.subject }} - {{ form.message }}</code>
  </h2>

  <form @submit.prevent="submitForm" action="https://formbold.com/s/3G5Xv" method="POST" enctype="multipart/form-data">
    <div class="form-group">
      <input
        type="email"
        placeholder="Email"
        v-model="form.email"
        required
        autofocus
        class="form-input"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        placeholder="Subject"
        v-model="form.subject"
        required
        class="form-input"
      />
    </div>
    <div class="form-group">
      <textarea
        v-model="form.message"
        placeholder="Type your message"
        required
        class="form-input"
      ></textarea>
    </div>

    <button type="submit" class="form-button">Send Message</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * メッセージ用のフォームデータ。
 * @type {Object}
 * @property {string} email - ユーザーのメールアドレス。
 * @property {string} subject - メッセージの件名。
 * @property {string} message - メッセージ本文。
 */
const form = ref({
  email: '',
  subject: '',
  message: ''
});

/**
 * フォーム送信を処理します。
 * フォームデータを収集し、指定されたサーバーに送信します。
 * @returns {void}
 */
const submitForm = (): void => {
  const formData = new FormData();
  formData.append('email', form.value.email);
  formData.append('subject', form.value.subject);
  formData.append('message', form.value.message);

  // FormBoldにデータを送信
  fetch(import.meta.env.VITE_SEND_EMAIL_SERVER, {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      alert('メッセージの送信中にエラーが発生しました');
      console.error(error);
    });
};
</script>

<style scoped>
/* フォームコンテナのスタイル */
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* フォーム入力フィールドのスタイル */
.form-input {
  padding: 12px;
  margin: 8px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  resize: vertical;
}

/* フォーム送信ボタンのスタイル */
.form-button {
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #45a049;
}

/* Display form input data with line breaks */
h2 {
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.form-display {
  display: block;
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
