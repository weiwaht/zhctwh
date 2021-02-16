<template>
  <ul>
    <li v-for="pic in pics" :key="pic" class="image-center-container">
      <el-image :src="pic.src" :fit="container"></el-image>
      <div class="title" v-text="pic.title"></div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pics: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
li {
  max-width: 400px;
  margin: 0 auto;
}
.image-center-container {
  margin-bottom: 10px;
}
.title {
  margin-top: 10px;
}
</style>
