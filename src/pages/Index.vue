<template>
  <view class="pinia-demo">
    <view class="h2">Pinia(Replace Vuex)</view>
    <text class="h3">{{ isEven ? 'Even' : 'Odd' }}</text>
    <text>{{ count }}</text>
    <view>
      <u-button type="primary" @click="add">Sync Add</u-button>
      <button @click="asyncAdd">Async Add</button>
    </view>
  </view>
</template>
<script setup>
const add = () => {
  Console.log('同步按下')
}

const asyncAdd = () => {
  Console.log('异步按下')
}
</script>
<style lang="scss">
.pinia-demo {
  text-align: center;

  .h2 {
    color: red;
    font-size: 40rpx;
  }

  .h3 {
    font-weight: bold;
  }
}
</style>
