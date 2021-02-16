<template>
  <el-row type="flex">
    <el-col :span="4"></el-col>
    <el-col :span="16">
      <h1 class="title">
        <nuxt-link to="/" v-text="title"></nuxt-link>
      </h1>
      <el-menu
        :default-active="activeIndex"
        class="navigation"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <nuxt-link to="/language">语言文字</nuxt-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <span>艺术</span>
          </template>
          <el-menu-item index="2-1">
            <nuxt-link to="/visual_art">视觉艺术</nuxt-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <nuxt-link to="/music">音乐和表演艺术</nuxt-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <nuxt-link to="/architectural_art">建筑艺术</nuxt-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <nuxt-link to="/literature">文学</nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link to="/clothing_design">服饰设计</nuxt-link>
        </el-menu-item>
        <el-menu-item index="5">
          <nuxt-link to="/eating_etiquette">饮食礼仪</nuxt-link>
        </el-menu-item>
        <el-menu-item index="6">
          <nuxt-link to="/physical_education">体育</nuxt-link>
        </el-menu-item>
        <el-menu-item index="7">
          <nuxt-link to="/about">关于</nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  props: { activeIndex: { type: String, default: '0' } },
  data() {
    return {
      title: process.env.WEBSIDE_NAME
    }
  }
}
</script>
<style scoped>
a {
  color: #303133;
}
.el-col-16 {
  border-bottom: solid 1px #e6e6e6;
}
.title {
  float: left;
}
.navigation {
  float: right;
  border-bottom-style: none;
}
.el-menu-item a {
  display: inline-block;
}
</style>
