<template>
    <div class="p3-h5">
        <div class="text animated bounceInDown" ref="text">
            <div class="t1">优质</div>
            <div class="t2">优惠的价格+不打折的份量和质量=铜陵优享</div>
            <div class="t3">从这里上架的商家，都是我们贴心为您整理的优质商家</div>
            <div class="t3">从吃喝玩乐到衣食住行，从白天到晚上</div>
            <div class="t3">轻轻松松就能找到你最优质最实惠的口碑店铺</div>
        </div>
        <img class="right animated bounceInRight" src="@images/p3-1.png" />
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p3-h5 {
    height: 7.53rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f7fb;
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
        width: 4.21rem;
    }
}
</style>

