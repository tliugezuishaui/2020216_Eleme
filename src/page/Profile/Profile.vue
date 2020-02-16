<template>
    <div class="profile">
        <!-- 头部组件 -->
        <HeaderTop>
            <i slot="left"></i>
            <p slot="content">我的</p>
            <p slot="right"></p>
        </HeaderTop>
        <!-- 登录注册 -->
        <router-link tag="div" to="/login" class="profileLogin">
            <div class="PhoNetInfo">
                <img src="./images/logo.png" alt="">
                <div>
                    <p class="register">登录/注册</p>
                    <p class="bindingMobile"><i class="iconfont icon-shouji1"></i>暂无绑定手机号</p>
                </div>
            </div>
            <div class="iconfont icon-youjiantou-01 rightArrow"></div>
        </router-link>
        <!-- 余额等 -->
        <ul class="profileDetail">
            <li>
                <p class="myBalance "><strong>0.00</strong>元</p>
                <p>我的余额</p>
            </li>
            <li>
                <p class="myDiscounts"><strong>0</strong>个</p>
                <p>我的优惠</p>
            </li>
            <li>
                <p class="myIntegral"><strong>0</strong>分</p>
                <p>我的积分</p>
            </li>
        </ul>
        <!-- 客户栏 -->
        <ul class="customerBar">
            <li>
                <i class="order iconfont icon-wodedingdan"></i>
                <span>我的订单</span>
                <i class="rightArrow iconfont icon-youjiantou-01"></i>
            </li>
            <li>
                <i class="pointsMall iconfont icon-yly_jifenshangcheng"></i>
                <span>积分商城</span>
                <i class="rightArrow iconfont icon-youjiantou-01"></i>
            </li>
            <li>
                <i class="clubCard iconfont icon-huiyuan1"></i>
                <span>饿了么外码会员卡</span>
                <i class="rightArrow iconfont icon-youjiantou-01"></i>
            </li>
            <li class="serverCenter">
                <i class="server iconfont icon-fuwuzhongxin"></i>
                <span>饿了么外卖会员卡</span>
                <i class="rightArrow iconfont icon-youjiantou-01"></i>
            </li>
        </ul>
    </div>
</template>

<script>
// 引入组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    // 注册组件
    components: { HeaderTop },
    // 改变当前页面背景颜色方式
    // 组件创建前
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:#F5F5F5')
    },
    // 组件销毁前
    beforeDestroy () {
        document.querySelector('body').setAttribute('style', '')
    }
}
</script>

<style lang="scss" scoped>
.profile {
    // height: 100%;    
    // background: #F5F5F5;
    .profileLogin {
        display: flex;
        padding: 10px 10px;
        border-top: 1px solid #fff;
        background: #0AA774;
        color: #fff;
        .PhoNetInfo {
            flex: 1;
            display: flex;
            align-items: center;
            .register {
                margin: 0px 0 10px 10px;
                font-size: 20px;
                font-weight: 600;
            }
            .bindingMobile {
                i {
                    vertical-align: middle;
                    font-size: 25px;
                    color: #fff;
                }
                font-size: 18px;
            }
        }
        .rightArrow {
            line-height: 79px;
        }
    }
    .profileDetail {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        background: #fff;
        li {
            padding: 20px;
            border-right: 1px solid #F0F0F0;
            &:last-child {
                border-right: none;
            }
            p {
                font-size: 16px;
                color: #6C6C6C;
            }
            .myBalance {
                margin-bottom: 10px;
                color: #000;
                strong {
                    color: #FF9600;
                    font-size: 30px;
                }
            }
            .myDiscounts {
                margin-bottom: 10px;
                color: #000;
                strong {
                    color: #F46858;
                    font-size: 30px;
                }
            }
            .myIntegral {
                 margin-bottom: 10px;
                color: #000;
                strong {
                    color: #72BE2E;
                    font-size: 30px;
                }
            }
        }
    }
    .customerBar {
        margin-top: 10px;
        li {
            padding: 12px 5px;
            background-color: #fff;
            border-bottom: 1px solid #F0F0F0;
            font-size: 18px;
            .order {
                font-size: 25px;
                color: #0AA774;
            }
            .pointsMall {
                font-size: 25px;
                color: #CB7559; 
            }
            .clubCard {
                font-size: 25px;
                color: #E0B474;   
            }
            .server {
                font-size: 25px;
                color: #0AA774;
            }
            .rightArrow {
                float: right;
                font-size: 10px;
                line-height: 30px;
            }
        }
        .serverCenter {
            margin-top: 10px;
        }
    }
}
</style>