<template>
    <div class="c2">
        <div class="content">
            <div class="desc">
                <div class="title">
                    公司简介
                    <i></i>
                </div>
                <div class="text" style="margin-top:60px">
                    “铜陵优享生活”由安徽米米网络技术开发运营的一个本地生活服务电子商务平台，秉承着“好生活、更划算”的理念，为用户好吃的、
                    好玩的、亲子类、女神专属等等铜陵本地最优惠、最优质的商家服务。在这里你能花最少的钱，享受最精致的生活。
                </div>
                <div class="text">
                    这是一个神奇的微信小程序，不用安装，不占内存，用最前沿的技术和最潮流简约的设计将铜陵的优质商家都收入其中。只需滑动
                    几下，你就知道什么叫优质生活，享在铜陵，过的更好，花的更少。
                </div>
            </div>
            <div class="desc">
                <div class="title">
                    联系我们
                    <i></i>
                </div>
                <div class="img">
                    <img class="map" src="@images/t-2.png" />
                    <div class="address">安徽米米网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：铜陵市汇金大厦1205室</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.c2 {
    display: flex;
    justify-content: center;
    .content {
        width: 1200px;
        padding: 0px 30px;
        .desc {
            margin-top: 80px;
            .title {
                font-size: 26px;
                color: #c6182e;
                position: relative;
                i {
                    position: absolute;
                    width: 50px;
                    height: 5px;
                    background-color: #c6182e;
                    bottom: -20px;
                    left: 0px;
                }
            }
            .text {
                margin-top: 35px;
                font-size: 18px;
                color: #727b8c;
                text-indent: 2em;
                line-height: 2;
            }
            .img {
                margin-top: 60px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .map {
                    width: 948px;
                }
                .address {
                    margin-top: 30px;
                    font-size: 22px;
                    color: #292f3d;
                }
            }
        }
    }
}
</style>

