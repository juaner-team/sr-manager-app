<template>
  <view class="home-index">
    <text class="home-index-text">操作</text>
    <view>
      <u-button type="primary" @click="handleToAddressList">地址列表</u-button>
      <u-button type="primary" @click="handleToAddAddress">添加地址</u-button>
    </view>
  </view>
</template>
<script setup>
const router = useRouter()

const handleToAddressList = () => {
  router.push({ name: 'customerSiteList' })
}

const handleToAddAddress = () => {
  router.push({ name: 'customerSiteEdit' })
}
</script>
<style lang="scss" scoped>
.home-index {
  text-align: center;
  .home-index-text {
    color: yellow;
  }
  .h2 {
    color: red;
    font-size: 40rpx;
  }

  .h3 {
    font-weight: bold;
  }
}
</style>
