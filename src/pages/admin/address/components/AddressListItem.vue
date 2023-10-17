<template>
  <view class="adminAddressItem">
    <view class="top">
      <view class="name">{{ address.name }}</view>
      <view class="phone">{{ address.phone }}</view>
      <view class="tag">
        <text
          v-if="address.status.type"
          :class="['text', { red: address.status.name == '作废' }]"
          >{{ address.status.name }}</text
        >
      </view>
    </view>
    <view class="bottom">
      {{ address.site }}
      <u-icon name="edit-pen" :size="40" color="#999999"></u-icon>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  address: {
    type: Object,
    require: true,
    default: () => {}
  }
})
</script>

<style scoped>
.adminAddressItem {
  .top {
    display: flex;
    font-weight: bold;
    font-size: 34rpx;
    .phone {
      margin-left: 60rpx;
    }
    .tag {
      display: flex;
      font-weight: normal;
      align-items: center;
      .text {
        display: block;
        padding: 0 5px;
        height: 34rpx;
        line-height: 34rpx;
        color: #ffffff;
        font-size: 20rpx;
        border-radius: 6rpx;
        text-align: center;
        margin-left: 30rpx;
        background-color: rgb(49, 145, 253);
      }
      .red {
        background-color: red;
      }
    }
  }
  .bottom {
    display: flex;
    margin-top: 20rpx;
    font-size: 28rpx;
    justify-content: space-between;
    color: #999999;
  }
}
</style>
