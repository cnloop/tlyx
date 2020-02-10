<template>
    <div class="p2" ref="p">
        <BaseTop></BaseTop>
        <div class="text animated bounceInDown" ref="text">
            <div class="t1">时尚</div>
            <div class="t2">优惠的价格+不打折的份量和质量=铜陵优享</div>
        </div>
        <div class="img">
            <div class="content">
                <div class="left animated bounceInLeft">
                    <div class="t1">简单时尚 &nbsp; 生活不乏味</div>
                    <div style="margin-top:60px" class="t2">上架每份产品都是极具代表性</div>
                    <div class="t2">口碑极佳明星产品</div>
                    <div class="t2">用五分钟时间体验铜陵最优质的商家</div>
                </div>
                <img class="right animated bounceInRight" src="@images/p2-1.png" />
            </div>
        </div>
    </div>
</template>
<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.p2 {
    height: 100%;
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
            .right {
                width: 636px;
            }
        }
    }
}
</style>

