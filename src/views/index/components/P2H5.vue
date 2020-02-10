<template>
    <div class="p2-h5">
        <div class="text animated bounceInDown" ref="text">
            <div class="t1">时尚</div>
            <div class="t2">优惠的价格+不打折的份量和质量=铜陵优享</div>
            <div class="t3">上架每份产品都是极具代表性，口碑极佳明星产品</div>
            <div class="t3">用五分钟时间体验铜陵最优质的商家</div>
        </div>
        <img class="right animated bounceInRight" src="@images/p2-1.png" />
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p2-h5 {
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
        margin-top: 0.2rem;
        width: 5.92rem;
    }
}
</style>

