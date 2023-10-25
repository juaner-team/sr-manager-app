<template>
  <view class="edit-site">
    <view class="top">
      <view class="item">
        <view class="left">收货人</view>
        <input
          v-model="site.name"
          type="text"
          placeholder-class="line"
          placeholder="请填写收货人姓名"
        />
      </view>
      <view class="item">
        <view class="left">手机号码</view>
        <input
          v-model="site.phone"
          type="text"
          placeholder-class="line"
          placeholder="请填写收货人手机号"
        />
      </view>
      <view class="item" @tap="showRegionPicker">
        <view class="left">所在地区</view>
        <input
          v-model="site.address"
          disabled
          type="text"
          placeholder-class="line"
          placeholder="省市区县、乡镇等"
        />
      </view>
      <view class="item address">
        <view class="left">详细地址</view>
        <textarea
          v-model="site.detailAddress"
          type="text"
          placeholder-class="line"
          placeholder="街道、楼牌等"
        />
      </view>
      <view class="item address">
        <view class="left">备注</view>
        <textarea
          v-model="site.note"
          type="text"
          placeholder-class="line"
          placeholder="备注"
        />
      </view>
    </view>
    <u-picker mode="region" ref="uPicker" v-model="pickerShow" />
  </view>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  }
})

const pickerShow = ref(false)

// const site = computed({
//   get: () => props.modelValue || {},
//   set: (val) => {
//     console.log('cccc')
//     context.emit('update:modelValue', val)
//   }
// })
const site = ref(props.modelValue)

// 展示地址选择器
const showRegionPicker = () => {
  pickerShow.value = true
  // site.value.name = ''
}
</script>
<style lang="scss" scoped>
.edit-site {
  .top {
    background-color: #ffffff;
    .item {
      display: flex;
      font-size: 32rpx;
      line-height: 100rpx;
      align-items: center;
      border-bottom: solid 2rpx $u-border-color;
      .left {
        width: 180rpx;
      }
      input {
        text-align: left;
      }
    }

    .address {
      padding: 10rpx 0;
      align-items: start;
      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 20rpx auto;
        padding: 20rpx;
      }
    }
    .site-clipboard {
      padding-right: 40rpx;
      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
      .clipboard {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
        color: $u-tips-color;
        height: 80rpx;
        .icon {
          margin-top: 6rpx;
          margin-left: 10rpx;
        }
      }
    }
  }
  .bottom {
    margin-top: 20rpx;
    padding: 40rpx;
    padding-right: 0;
    background-color: #ffffff;
    font-size: 28rpx;
    .tag {
      display: flex;
      .left {
        width: 160rpx;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        .tags {
          width: 140rpx;
          padding: 16rpx 8rpx;
          border: solid 2rpx $u-border-color;
          text-align: center;
          border-radius: 50rpx;
          margin: 0 10rpx 20rpx;
          display: flex;
          font-size: 28rpx;
          align-items: center;
          justify-content: center;
          color: $u-content-color;
          line-height: 1;
        }
        .plus {
          //padding: 10rpx 0;
        }
      }
    }
  }
}
</style>
