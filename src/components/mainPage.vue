<template>
  <div class="main-page">
    <div>
      <h1>Main Page</h1>
      <a-button class="btn-path" @click="goToPath('profile')">Profile</a-button>
      <a-button class="btn-path" @click="goToPath('gallery')">Gallery</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-page",
  data() {
    return {

    }
  },
  methods: {
    goToPath(path) {
      this.$router.push({name: path})
    }
  },
};
</script>

<style scoped>
.main-page {
  text-align: center;
}
.btn-path {
  margin: 10px;
}
</style>
