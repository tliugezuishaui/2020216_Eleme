<template>
    <div>
        <ul class="Fg-page">
            <router-link tag="li" to="/msite" :class="{on: '/msite' === $route.path}">
                <i class="iconfont icon-mifan"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" to="/search" :class="{on: '/search' === $route.path}">
                <i class="iconfont icon-tubiao-"></i>
                <span>搜索</span>
            </router-link>
            <router-link tag="li" to="/order" :class="{on: '/order' === $route.path}">
                <i class="iconfont search icon-dingdan"></i>
                <span>订单</span>
            </router-link>
            <router-link tag="li" to="profile" :class="{on: '/profile' === $route.path}">
                <i class="iconfont icon-icon_gerenzhongxin_x"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.Fg-page {
    padding: 10px 0;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: #fff;
    border-top: 1px solid #ccc;
    li {
        flex: 1;
        i,span {
            display: block;
        }
        i {
            margin-bottom: 8px;
        }
        .iconfont {
            font-size: 20px;
        }
        span {
            font-size: 14px;
        }
    }
    .on {
            color: #0AA774;
        }
}
</style>