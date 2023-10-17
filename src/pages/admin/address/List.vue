<template>
  <view class="adminAddressList">
    <view
      class="addressItem"
      v-for="(address, index) in addressList"
      :key="address.id"
      @longpress="handleItemLongPress(address)"
    >
      <address-list-item :address="address" />
    </view>
  </view>
</template>
<script setup>
import AddressListItem from './components/AddressListItem.vue'

const addressList = ref([
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
.adminAddressList {
  .addressItem {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }
}
</style>
