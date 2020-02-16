<template>
    <div class="headerTop">
        <!-- <i class=" iconfont icon-sousuo headerTop-searchIcon"></i> -->
        <slot name="left"></slot>
        <!-- <p class="title">北京市人民大会堂</p> -->
        <slot name="content"></slot>
        <!-- <p class="login">登录|注册</p> -->
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.headerTop {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    background: #0AA774;
    color: #fff;
    text-align: center;
    i {
        font-size: 20px;
    }
    .title {
        margin-left: 28px;
    }
    .login {
        font-size: 13px;
    }
}
</style>