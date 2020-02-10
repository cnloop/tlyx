<template>
    <div class="p1" ref="p">
        <BaseTop></BaseTop>
        <div class="text animated bounceInLeft" ref="text">
            <div class="t1">铜陵优享生活</div>
            <div class="t2">本地生活服务电子商务平台</div>
            <div class="t3">吃、喝、玩、乐在这里花最少的钱，享受最精致的生活</div>
        </div>
        <div class="img">
            <div class="content">
                <img class="img-1 animated bounceInUp" src="@images/p1-1.png" />
                <!-- <div class="applet animated bounceInRight">
                    <img class="img-2" src="@images/p1-2.png" />
                    <div class="text">扫码立即体验</div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, #ff674a, #f94233);
    overflow: hidden;
    .text {
        .t1,
        .t2 {
            display: flex;
            justify-content: center;
            font-size: 40px;
            color: #fff;
            opacity: 0.9;
        }
        .t2 {
            margin-top: 10px;
        }
        .t3 {
            margin-top: 12px;
            display: flex;
            justify-content: center;
            color: #fff;
            font-size: 23px;
            opacity: 0.9;
        }
    }
    .img {
        margin-top: 40px;
        > .content {
            position: relative;
            .img-1 {
                width: 596px;
            }
            > .applet {
                position: absolute;
                right: -220px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                .img-2 {
                    width: 141px;
                }
                > .text {
                    margin-top: 10px;
                    display: flex;
                    justify-content: center;
                    font-size: 16px;
                    color: #fff;
                    opacity: 0.9;
                }
            }
        }
    }
}
</style>

