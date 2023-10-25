<template>
  <view class="admin-site-list">
    <view
      class="site-item"
      v-for="(site, index) in siteList"
      :key="site.id"
      @longpress="handleItemLongPress(site)"
    >
      <site-list-item :site="site" />
    </view>
  </view>
</template>
<script setup>
import SiteListItem from '@/components/SiteListItem'

const siteList = ref([
  {
    id: 1,
    name: '游X',
    phone: '183****5523',
    status: {
      type: 1,
      name: '已确认'
    },
    site: '广东省深圳市宝安区 自由路61号'
  },
  {
    id: 2,
    name: '李XX',
    phone: '183****5555',
    status: {
      type: 1,
      name: '作废'
    },
    site: '广东省深圳市宝安区 翻身路xx号'
  },
  {
    id: 3,
    name: '王YY',
    phone: '153****5555',
    status: {},
    site: '广东省深圳市宝安区 平安路13号'
  },
  {
    id: 4,
    name: '游X',
    phone: '183****5523',
    status: {
      type: 1,
      name: '已确认'
    },
    site: '广东省深圳市宝安区 自由路61号'
  },
  {
    id: 5,
    name: '李XX',
    phone: '183****5555',
    status: {
      type: 1,
      name: '作废'
    },
    site: '广东省深圳市宝安区 翻身路xx号'
  },
  {
    id: 6,
    name: '王YY',
    phone: '153****5555',
    status: {},
    site: '广东省深圳市宝安区 平安路13号'
  },
  {
    id: 7,
    name: '游X',
    phone: '183****5523',
    status: {
      type: 1,
      name: '已确认'
    },
    site: '广东省深圳市宝安区 自由路61号'
  },
  {
    id: 8,
    name: '李XX',
    phone: '183****5555',
    status: {
      type: 1,
      name: '作废'
    },
    site: '广东省深圳市宝安区 翻身路xx号'
  },
  {
    id: 9,
    name: '王YY',
    phone: '153****5555',
    status: {},
    site: '广东省深圳市宝安区 平安路13号'
  },
  {
    id: 10,
    name: '李XX',
    phone: '183****5555',
    status: {
      type: 1,
      name: '作废'
    },
    site: '广东省深圳市宝安区 翻身路xx号'
  },
  {
    id: 11,
    name: '王YY',
    phone: '153****5555',
    status: {},
    site: '广东省深圳市宝安区 平安路13号'
  }
]) // 地址数据

// 长按事件触发
const handleItemLongPress = (a) => {
  console.log(a.name)
  uni.setClipboardData({
    data: JSON.stringify(a)
  })
}
</script>
<style scoped>
.admin-site-list {
  .site-item {
    background-color: #f1f1f1;
    padding: 20rpx;
    margin: 20rpx;
    border-radius: 20rpx;
  }
}
</style>
