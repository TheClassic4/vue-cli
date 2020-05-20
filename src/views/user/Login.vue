<template>
  <div class="main"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    ...mapGetters(['csessionId'])
  }
}
</script>

<style lang="less" scoped>
</style>
