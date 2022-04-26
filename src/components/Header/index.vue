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
  font-size: 0;
  color: @color-theme;
  text-align: center;

  .icon {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin-top: 12px;
    margin-right: 18px;
    overflow: hidden;
    vertical-align: top;
    background: url(./naruto.webp) no-repeat;
    background-size: 64px 64px;
    border-radius: 50%;
  }

  .text {
    display: inline-block;
    font-size: @font-size-large;
    line-height: 88px;
    vertical-align: top;
  }
}
</style>
