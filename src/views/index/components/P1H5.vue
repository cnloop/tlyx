<template>
    <div class="p1-h5">
        <div class="text animated bounceInLeft" ref="text">
            <div class="t1">铜陵优享生活</div>
            <div class="t2">本地生活服务电子商务平台</div>
            <div class="t3">吃、喝、玩、乐在这里花最少的钱，享受最精致的生活</div>
        </div>
        <img class="img-1 animated bounceInUp" src="@images/p1-1.png" />
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p1-h5 {
    height: 5.87rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: linear-gradient(to bottom, #ff674a, #f94233);
    overflow: hidden;
    .text {
        .t1,
        .t2 {
            display: flex;
            justify-content: center;
            font-size: 0.34rem;
            color: #fff;
            opacity: 0.9;
        }
        .t2 {
            font-size: 0.31rem;
            margin-top: 0.1rem;
        }
        .t3 {
            margin-top: 0.12rem;
            display: flex;
            justify-content: center;
            color: #fff;
            font-size: 0.22rem;
            opacity: 0.9;
        }
    }
    .img-1 {
        margin-top: 0.4rem;
        width: 3.57rem;
    }
}
</style>

