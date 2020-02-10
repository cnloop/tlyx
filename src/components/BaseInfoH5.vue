<template>
    <div class="base-info-h5">
        <!-- <div class="top">
            <div class="img">
                <img src="@images/p5-2.png" />
                <div class="text">服务号</div>
            </div>
            <div class="img" style="margin-left:0.5rem">
                <img src="@images/p5-1.png" />
                <div class="text">小程序</div>
            </div>
        </div>-->
        <div class="bottom">
            <div class="title">关于我们</div>
            <div class="sub-title" style="margin-top:0.1rem;">联系电话：0562-2628887</div>
            <div class="company" style="margin-top:0.1rem;">©2018-2019 米米科技 （皖ICP备19000070号）</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.base-info-h5 {
    .top {
        height: 4.94rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #272727;
        .img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: 2.5rem;
            }
            .text {
                margin-top: 0.3rem;
                font-size: 0.32rem;
                color: #fff;
            }
        }
    }
    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 1.42rem;
        background-color: #191919;
        .title,
        .sub-title {
            display: flex;
            justify-content: center;
            font-size: 0.18rem;
            color: #fff;
            opacity: 0.8;
        }
        .company {
            display: flex;
            justify-content: center;
            font-size: 0.18rem;
            color: #fff;
            opacity: 0.3;
        }
    }
}
</style>

