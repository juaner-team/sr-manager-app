<template>
  <view class="edit-wrap">
    <edit-site v-model="site" />

    <view class="site-clipboard">
      <textarea
        placeholder-class="line"
        :value="clipboard"
        placeholder="粘贴文本,可自动识别姓名和地址等"
      />
    </view>

    <view class="save-site" @tap="handleSaveSite">
      <view class="add">
        <u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon
        >保存地址
      </view>
    </view>
    <u-picker mode="region" ref="uPicker" v-model="pickerShow" />
  </view>
</template>
<script setup>
import EditSite from '@components/site/SiteEdit'

const router = useRouter()
const pickerShow = ref(false)
const site = ref({
  id: 1,
  name: '游X',
  phone: '183****5523',
  status: {
    type: 1,
    name: '已确认'
  },
  address: '广东省深圳市宝安区',
  detailAddress: '自由路61号',
  note: '可以放在菜鸟驿站，不要发邮政'
}) // 地址数据
const clipboard = ref('粘贴板内容')

// TODO: DDL 2023-11-28 获取粘贴板内容，并解析
function parseClipboardSite() {
  console.log('解析')
}

// TODO: DDL 2023-11-28  获取地址详情信息
function getSiteInfo() {
  console.log('获取info')
}

// 展示地址选择器
const showRegionPicker = () => {
  pickerShow.value = true
}

// 添加地址
const handleSaveSite = () => {
  // TODO: DDL 2023-11-28  保存地址信息
  // router.replaceAll({ name: 'customerSiteList' })
  console.log(site.value)
}

onShow(() => {
  // 获取粘贴板内容，并解析
  parseClipboardSite()
  // 获取地址详情信息
  getSiteInfo()
  // #ifdef MP-WEIXIN
  uni.hideHomeButton()
  // #endif
})
</script>
<style lang="scss" scoped>
.edit-wrap {
  background-color: #ffffff;
  padding: 20rpx;
  .site-clipboard {
    textarea {
      // width: 100%;
      height: 150rpx;
      background-color: #f7f7f7;
      line-height: 60rpx;
      margin: 10rpx auto;
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

  .save-site {
    display: flex;
    justify-content: space-around;
    width: 600rpx;
    line-height: 100rpx;
    position: absolute;
    bottom: 30rpx;
    left: 80rpx;
    background-color: #dcd6f7;
    border-radius: 60rpx;
    font-size: 30rpx;
    .add {
      display: flex;
      align-items: center;
      color: #ffffff;
      .icon {
        margin-right: 10rpx;
      }
    }
  }
}
</style>
