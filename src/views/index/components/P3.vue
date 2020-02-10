<template>
    <div class="p3" ref="p">
        <BaseTop></BaseTop>
        <div class="text animated bounceInDown" ref="text">
            <div class="t1">优质</div>
            <div class="t2">优惠的价格+不打折的份量和质量=铜陵优享</div>
        </div>
        <div class="img">
            <div class="content">
                <img class="left animated bounceInLeft" src="@images/p3-1.png" />
                <div class="right animated bounceInRight">
                    <div class="t1">最优质 &nbsp; 最实惠</div>
                    <div style="margin-top:60px" class="t2">从这里上架的商家，都是我们贴心为您</div>
                    <div class="t2">整理的优质商家。从吃喝玩乐到衣食住</div>
                    <div class="t2">行，从白天到晚上，轻轻松松就能找到</div>
                    <div class="t2">你最优质最实惠的口碑店铺。</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p3 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7fbff;
    overflow: hidden;
    .text {
        .t1 {
            display: flex;
            justify-content: center;
            font-size: 40px;
            color: #c5162c;
        }
        .t2 {
            display: flex;
            justify-content: center;
            font-size: 23px;
            color: #292f3d;
        }
        .t2 {
            margin-top: 10px;
        }
    }
    .img {
        margin-top: 110px;
        > .content {
            width: 1200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
                width: 585px;
            }
            .right {
                .t1 {
                    font-size: 30px;
                    color: #292f3d;
                    position: relative;
                    &:after {
                        content: "";
                        position: absolute;
                        bottom: -20px;
                        left: 0px;
                        width: 50px;
                        height: 5px;
                        background-color: #292f3d;
                    }
                }
                .t2 {
                    margin-top: 20px;
                    font-size: 23px;
                    color: #727b8c;
                }
            }
        }
    }
}
</style>

