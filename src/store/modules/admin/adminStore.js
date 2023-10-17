const useStore = defineStore('adminState', {
  state: () => ({
    userInfo: {}
  }),
  getters: {},
  actions: {
    logout() {
      this.userInfo = null
    }
  }
})

export default useStore
