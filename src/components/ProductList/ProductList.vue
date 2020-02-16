<template>
    <div class="nearbyShops">
        <img src="./images/logo.png" alt="">
        <div class="descript">
            <div class="title">
                <span class="brand">品牌</span>
                <span class="brandTitle">老乡鸡 (温都水城)</span>
            </div>
            <div class="starts">
                <i class="iconfont icon-xingxing"></i>
                <i class="iconfont icon-xingxing"></i>
                <i class="iconfont icon-xingxing"></i>
                <i class="iconfont icon-xingxing"></i>
                <span class="grade">4.7</span>
                <span class="monthlySales">月售106单</span>
            </div>
            <div class="shippingFee">
                <span>￥20起送 / 配送费约5￥</span>
            </div>
        </div>
        <div class="pledge">
            <p>
                <span>保</span>
                <span>准</span>
                <span>票</span>
            </p>
            <p class="courier">硅谷专送</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .nearbyShops {
        padding: 20px 10px;
        display: flex;
        background: #fff;
        border-bottom: 1px solid #F5F5F5;
        img {
            width: 65px;
            height: 65px;
        }
        .descript {
            flex: 1;
            margin-left: 15px;
            .title {
                margin-bottom: 10px;
                .brand {
                    background: #FDDA33;
                    font-weight: 700;
                    font-size: 14px;
                }
                .brandTitle {
                    font-weight: 700;
                    font-size: 18px;
                }
            }
            .starts {
                margin-bottom: 10px;
                    i {
                        color: #FF9500;
                    }
                    .grade {
                        color: #FB8E59;
                    }
                    .monthlySales {
                        font-size: 12px;
                        color:#7E7E7E;
                    }
            }
            .shippingFee {
                color: #7E7E7E;
                font-size: 14px;
            }
        }
        .pledge {
            float: right;
            p {
                display: flex;
                margin-bottom: 16px;
                span {
                    display: block;
                    border: 1px solid #F3F3F3;
                    color: #999999;
                }
            }
            .courier {
                font-size: 8px;
                color: #6DBA9D;
                border: 1px solid #6DBA9D;
                border-radius: 3px;
            }
        }
    }
</style>