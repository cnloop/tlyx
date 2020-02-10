<template>
    <div class="p4-h5">
        <div class="text animated bounceInDown" ref="text">
            <div class="t1">分享</div>
            <div class="t2">寻得好店当然不能独享，快快告诉你的好友们</div>
            <div class="t3">从直接把小程序发的群里，方便又时尚</div>
            <div class="t3">每一个商品都能自动生成海报图，怎么发相信你肯定懂得！</div>
            <div class="t3">这是不是今年最潮流的晒圈方式呢 ？</div>
        </div>
        <img class="right animated bounceInRight" src="@images/p4-1.png" />
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p4-h5 {
    height: 7.53rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    overflow: hidden;
    .text {
        .t1 {
            display: flex;
            justify-content: center;
            font-size: 0.38rem;
            color: #c5162c;
        }
        .t2 {
            margin-top: 0.1rem;
            display: flex;
            justify-content: center;
            font-size: 0.25rem;
            color: #292f3d;
        }

        .t3 {
            margin-top: 0.1rem;
            display: flex;
            justify-content: center;
            font-size: 0.25rem;
            color: #727b8c;
        }
    }
    img {
        margin-top: 0.4rem;
        width: 5.04rem;
    }
}
</style>

