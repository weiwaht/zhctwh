<template>
  <el-container>
    <el-header>
      <Header :active-index="activeIndex" />
    </el-header>
    <el-main>
      <div class="index">
        <el-image
          :src="require(`~/assets/images/index.jpg`)"
          fit="contain"
        ></el-image>
        <p class="p1">中华文化上下五千年，</p>
        <p class="p2">历史悠久，</p>
        <p class="p3">底蕴深厚。</p>
        <p class="p4">在浩瀚的历史长河中，</p>
        <p class="p5">中国传统文化展现出独特的魅力，</p>
        <p class="p6">让世界为之赞叹，</p>
        <p class="p7">让国人为之骄傲！</p>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/Header.vue'

export default Vue.extend({
  components: {
    Header
  },
  data() {
    return {
      activeIndex: '0'
    }
  },
  head() {
    return {
      title: process.env.WEBSIDE_NAME
    }
  }
})
</script>

<style scoped>
.el-main {
  padding: 0;
  background-color: #e5e1c4;
}
.index {
  position: relative;
}
.el-image {
  width: 100%;
}
p {
  color: #303133;
  font-size: 24px;
  line-height: 26px;
  margin: 0 auto;
  position: absolute;
  top: 80px;
  width: 24px;
  word-wrap: break-word;
}
.p1 {
  right: 460px;
}
.p2 {
  right: 500px;
}
.p3 {
  right: 540px;
}
.p4 {
  right: 580px;
}
.p5 {
  right: 620px;
}
.p6 {
  right: 660px;
}
.p7 {
  right: 700px;
}
</style>
