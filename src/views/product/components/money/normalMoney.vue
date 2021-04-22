<template>
  <div class="money">
    <span class="nowmoney"
      >¥{{ Math.floor(item.oldMoney * item.discount) }}元</span
    >
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="less" scoped>
.money {
  text-align: center;
  margin: 5px 0;
  font-size: 14px;
  .oldmoney {
    color: #b0b0b0;
    text-decoration: line-through;
  }
  .nowmoney {
    font-size: 16px;
    color: #ff6709;
  }
}
</style>