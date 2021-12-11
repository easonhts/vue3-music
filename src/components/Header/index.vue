<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Naruto Music</h1>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
.header {
  height: 88px;
  text-align: center;
  color: @color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    width: 64px;
    height: 64px;
    margin-right: 18px;
    background: url(./naruto.webp) no-repeat;
    background-size: 64px 64px;
    overflow: hidden;
    border-radius: 50%;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 88px;
    font-size: @font-size-large;
  }
}
</style>