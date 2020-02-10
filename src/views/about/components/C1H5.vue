<template>
    <div class="top">
        <div class="content" :style="{backgroundImage:`url(${require('@images/t-1.png')})`}">
            <div class="value-arr">
                <div class="v1">
                    <div class="number">
                        <div class="n" ref="n1">12</div>
                        <i>年</i>
                    </div>
                    <div class="text">互联网品牌运营经验</div>
                </div>
                <div class="v1" style="border-right:none">
                    <div class="number">
                        <div class="n" ref="n2">90</div>
                        <i>+</i>
                    </div>
                    <div class="text">拥有专业人员</div>
                </div>
            </div>
            <div class="value-arr">
                <div class="v1" style="border-bottom:none;">
                    <div class="number">
                        <div class="n" ref="n3">900</div>
                        <i>家</i>
                    </div>
                    <div class="text">上架优质商家</div>
                </div>
                <div class="v1" style="border-right:none;border-bottom:none;">
                    <div class="number">
                        <div class="n" ref="n4">99.5</div>
                        <i>%</i>
                    </div>
                    <div class="text">客户好评率</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import anime from "animejs";
export default {
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await this.$nextTick();
            let n1 = this.$refs.n1;
            let n2 = this.$refs.n2;
            let n3 = this.$refs.n3;
            let n4 = this.$refs.n4;
            this.changeValue(n1, 12, 1);
            this.changeValue(n2, 90, 1);
            this.changeValue(n3, 900, 10);
            this.changeValue(n4, 99.5, 10);
        },
        changeValue(target, numbner, round) {
            anime({
                targets: target,
                innerHTML: [0, numbner],
                easing: "linear",
                round: round //
            });
        }
    }
};
</script>

<style lang="less" scoped>
.top {
    .content {
        width: 100%;
        height: 5.61rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        background-size: cover;
        background-repeat: no-repeat;
        .value-arr {
            width: 100%;
            height: 2.8rem;
            display: flex;
            .v1 {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                border-right: 1px solid rgba(118, 118, 118, 0.2);
                border-bottom: 1px solid rgba(118, 118, 118, 0.2);
                position: relative;
                .number {
                    display: flex;
                    align-items: baseline;
                    .n {
                        flex: 1;
                        font-size: 0.9rem;
                        color: #fff;
                    }
                    i {
                        font-size: 0.22rem;
                        color: #fff;
                    }
                }
                .text {
                    font-size: 0.22rem;
                    color: #fff;
                }
            }
        }
    }
}
</style>
