<template>
    <div class="search">
        <!-- 头部组件 -->
        <HeaderTop>
            <i slot="left"></i>
            <p slot="content">搜索</p>
            <p slot="right"></p>
        </HeaderTop>
        <!-- 搜索内容 -->
        <div class="searchValue">
            <input type="text" placeholder="请输入商家或美食名称">
            <span>提交</span>
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
.search {
    .searchValue {
        display: flex;
        padding: 15px 10px;
        input {
            flex: 1;
            margin-right: 8px;
            padding: 3px 8px;
            height: 30px;
            background: #F2F2F2;
            border: none;
            outline: none;
        }
        span {
            display: inline-block;
            padding: 10px 0;
            width: 50px;
            background: #0AA774;
            color: #fff;
            text-align: center;
        }
    }
}
</style>