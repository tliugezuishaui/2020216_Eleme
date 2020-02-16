<template>
    <div class="login">
        <div class="login-return iconfont icon-zuojiantou" @touchend="$router.back()"></div>
        <div class="login-content">
            <h1>饿了么</h1>
            <div class="loginMethod">
                <span class="textLogin">短信登录</span>
                <span class="passwordLogin">密码登录</span>
            </div>
            <div class="inputBox">
                <div class="telephone">
                    <input type="text" placeholder="手机号">
                    <span>获取验证码</span>
                </div>
                <div class="code">
                    <input type="text" placeholder="验证码">
                </div>
            </div>
            <div class="warmPrompt">
                <p>温馨提示：未注册的饿了么外卖账号的手机号，登录</p>
                <p>时将自动注册，且代表已同意<font> 《用户服务协议》 </font></p>
            </div>
            <div class="loginButton">登录</div>
            <div class="aboutUs">关于我们</div>
        </div>
    </div>
</template>

<script>
export default {
    // 方法
    methods: {
        // 返回上一级
        // back() {
        //     this.$router.go(-1)
        // }
    }
}
</script>

<style lang="scss" scoped>
.login {
    padding: 8px;
    .login-return {
        font-size: 20px;
        font-weight: 900;
        color: #9C9C9C;
    }
    .login-content {
        text-align: center;
        margin-top: 50px;
        h1 {
            margin-bottom: 40px;
            font-size: 40px;
            color: #51A275;
            font-weight: 900;
        }
        .loginMethod {
            font-size: 16px;
            .textLogin {
                padding-bottom: 5px;
                margin-right: 40px;
                border-bottom: 2px solid #51A275;
                color: #51A275;
                font-weight: 800;
            }
        }
        .inputBox {
            margin-top: 30px;
            input::-webkit-input-placeholder{
                font-weight: 700;
                color:#9B9B9B;
            }
            input {
                width: 300px;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #ccc;
                outline: none;
            }
            .telephone {
                position: relative;
                span {
                    position: absolute;
                    right: 45px;
                    top: 17px;
                    font-size: 14px;
                    color: #757575;
                }
            }
            .code {
                margin-top: 18px;
            }
        }
        .warmPrompt {
            margin-top: 10px;
            padding: 0 10px;
            p {
                font-size: 14px;
                color: #757575;
                &:last-child {
                    margin-top: 8px;
                    font {
                        color: #51A275;
                    }
                }
            }
        }
        .loginButton {
            margin: auto;
            margin-top: 50px;
            padding: 15px;
            width: 300px;
            color: #fff;
            border-radius: 5px;
            background-color: #51A275;  
        }
        .aboutUs {
            margin-top: 20px;
            color: #757575;
            font-size: 14px;
        }
    }
}
</style>