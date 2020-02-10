<template>
    <div class="base-info">
        <!-- <div class="top">
            <div class="content">
                <div class="left">
                    <div class="text">
                        <i @click.stop="selecte(0)">首页</i>
                        <i @click.stop="selecte(0)">时尚</i>
                        <i @click.stop="selecte(0)">优质</i>
                    </div>
                    <div class="text" style="margin-top:10px">
                        <i @click.stop="selecte(0)">分享</i>
                        <i @click.stop="selecte(4)">关于我们</i>
                    </div>
                </div>
                <div class="center">
                    <div class="img">
                        <img src="@images/p5-1.png" />
                        <div class="text">小程序</div>
                    </div>
                    <div class="img" style="margin-left:30px">
                        <img src="@images/p5-2.png" />
                        <div class="text">服务号</div>
                    </div>
                    <div class="img" style="margin-left:30px">
                        <img src="@images/p5-3.png" />
                        <div class="text">订阅号</div>
                    </div>
                </div>
                <div class="right">
                    <div style="font-size:20px">商务咨询</div>
                    <div style="margin-top:10px">推广电话：0562-2628887</div>
                    <div style="margin-top:10px">手机号：13339125777</div>
                    <div style="margin-top:10px">微信号：yxkf-1</div>
                </div>
            </div>
        </div>-->
        <div class="bottom">
            <div class="tel">联系电话：0562-2628887</div>
            <div class="cp">©2018-2019 米米科技 （皖ICP备19000070号）</div>
        </div>
    </div>
</template>
<script>
import { isMobile } from "_func/func";
export default {
    props: {
        isHome: {
            type: Boolean,
            default: false
        },
        isAbout: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selecte(index) {
            if (index == 4 && this.isHome) {
                window.open(aboutUrl);
            } else if (index != 4 && this.isAbout) {
                return window.open(homeUrl);
            }
        }
    }
};
</script>

<style lang="less" scoped>
.base-info {
    .top {
        display: flex;
        justify-content: center;
        background-color: #272727;
        .content {
            width: 1200px;
            height: 260px;
            display: flex;
            justify-content: space-between;
            .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .text {
                    display: flex;
                    i {
                        cursor: pointer;
                        opacity: 0.6;
                        color: #fff;
                        font-size: 15px;
                        margin-right: 40px;
                    }
                }
            }
            .center {
                display: flex;
                align-items: center;
                justify-content: center;
                .img {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    img {
                        width: 128px;
                    }
                    .text {
                        margin-top: 10px;
                        color: #fff;
                        font-size: 16px;
                    }
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                > div {
                    color: #fff;
                    opacity: 0.6;
                    font-size: 16px;
                }
            }
        }
    }
    .bottom {
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #191919;
        > div {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.6);
        }
        .cp{
            margin-top: 10px;
        }
    }
}
</style>

