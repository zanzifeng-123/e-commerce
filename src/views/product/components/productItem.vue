<template>
  <div class="item">
    <div class="product">
      <div class="img">
        <img :src="item.img" alt="" />
        <span class="icon">
          <router-link to="productMessage"
            ><i class="el-icon-edit" @click="to_productMessage(index)"></i
          ></router-link>
          <i class="el-icon-delete" @click="det(index)"></i>
        </span>
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="txt">{{ item.describe }}</div>
      <keep-alive>
        <component v-bind:is="item.type" :item="item"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {};
  },
  components: {
    activity: require("./money/activityMoney.vue").default,
    normal: require("./money/normalMoney.vue").default,
  },
  methods: {
    sub(index) {
      this.$store.dispatch("product1/det_item", index);
    },
    det(index) {
      const that = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          that.sub(index);
          // this.handleDelete(index, row);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    to_productMessage(index) {
      this.$store.dispatch("index/change_listIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  cursor: pointer;
  float: left;
  margin: 0 10px 20px;
  transition: all 0.2s linear;
  background-color: #fff;
  //   box-shadow: 30px 30px 30px 30px;
  &:hover {
    box-shadow: 2px 0px 10px 5px #a6a9ad;
    transform: translate3d(0, -2px, 0);
  }
  .product {
    width: 350px;
    .img {
      width: 100%;
      height: 350px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      &:hover {
        .icon {
          visibility: visible;
        }
      }
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .icon {
        position: absolute;
        visibility: hidden;
        top: 10px;
        right: 10px;
        i {
          font-size: 20px;
          color: #fff;
          margin-left: 20px;
          &:hover {
            color: #409eff;
          }
        }
      }
    }
    .name {
      margin: 8px 0;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .txt {
      text-align: center;
      font-size: 14px;
      padding: 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      color: #808695;
    }
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
  }
}
</style>