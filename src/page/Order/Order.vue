<template>
    <div class="order">
        <!-- 头部组件 -->
        <HeaderTop>
            <i slot="left"></i>
            <p slot="content">订单列表</p>
            <p slot="right"></p>
        </HeaderTop>
        <img src="./images/person.png" alt="">
       <div class="orderDetails">
            <p class="findOrder">登陆后查看外卖订单</p>
            <span class="register">立即登录</span>
       </div>
    </div>
</template>

<script>
// 引入组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    // 注册组件
    components: { HeaderTop }
}
</script>

<style lang="scss" scoped>
.order {
    position: relative;
    img {
        display: block;
        margin: 50px auto;
    }
    .orderDetails {
        position: absolute;
        left: 118px;
        bottom: -40px;
        text-align: center;
        .findOrder {
            color: #A3A3A3;
            font-size: 20px;
            margin-bottom: 10px;
        }
        .register {
            display: inline-block;
            padding: 10px;
            color: white;
            background: #0AA774;
        }
    }
}
</style>