<template>
    <div class="msite">
        <!-- 头部导航 -->
        <HeaderTop>
            <i class=" iconfont icon-sousuo headerTop-searchIcon" slot="left"></i>
            <p class="title" slot="content">北京市人民大会堂</p>
            <p class="login" slot="right">登录|注册</p>
        </HeaderTop>
        <!-- 轮播图区域 -->
        <!-- <ul class="msiteNav">
            <li v-for="item in types" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul> -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <ul class="msiteNav swiper-slide">
                <li v-for="item in types" :key="item.id">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <ul class="msiteNav swiper-slide">
                <li v-for="item in types" :key="item.id">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <ul class="msiteNav swiper-slide">
                <li v-for="item in types" :key="item.id">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 附近商家 -->
        <h4>附近商家</h4>
        <!-- 商品列表 -->
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
    </div>
</template>

<script>
// 引入组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ProductList from '../../components/ProductList/ProductList.vue';
// 引入swiper
// import Swiper from 'swiper';
// 引入swiper样式
// import 'swiper/css/swiper.min.css';
export default {
    // 注册组件
    components: { HeaderTop, ProductList },
    // 数据
    data() {
        return {
            types: [
                // 引入图片时要加上require进行引入
                { id: 1, title: '美食', img: require('./images/nav/01.png') },
                { id: 2, title: '大牌惠吃', img: require('./images/nav/02.png') },
                { id: 3, title: '跑腿代购', img: require('./images/nav/03.png') },
                { id: 4, title: '汉堡披萨', img: require('./images/nav/04.png') },
                { id: 5, title: '速食简餐', img: require('./images/nav/05.png') },
                { id: 6, title: '地方小吃', img: require('./images/nav/06.png') },
                { id: 7, title: '大牌惠吃', img: require('./images/nav/07.png') },
                { id: 8, title: '速食简餐', img: require('./images/nav/08.png') },
            ]
        }
    },
    // 组件创建完成
    mounted() {
        // 创建一个swiper实例对象，实现轮播
        new Swiper('.swiper-container', {
            // 可以循环轮播
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination'
        })
    }
}
</script>

<style lang="scss" scoped>
.msite {
    padding-bottom: 62px;
    background: #F5F5F5;
    .msiteNav {
        margin-bottom: 10px;
        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        text-align: center;
        background: #fff;
        color: #686868;
        li {
            width: (100%/4);
            img {
                width: 50%;
            }
            p {
                margin: 10px 0 10px 0;
                font-size: 14px;
            }
        }
    }
    h4 {
        padding: 10px;
        background: #fff;
        border-top: 1px solid #E8E8E8;
        color: #9D9D9D;
    }
}
</style>