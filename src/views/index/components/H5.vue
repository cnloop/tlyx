<template>
    <div class="h5">
        <BaseNavH5 @goUrl="goUrl"></BaseNavH5>
        <BaseTopH5></BaseTopH5>
        <div class="content" style="height: 5.87rem;" ref="p1">
            <P1H5 v-if="showP1"></P1H5>
        </div>
        <div class="content" ref="p2">
            <P2H5 v-if="showP2"></P2H5>
        </div>
        <div class="content" ref="p3">
            <P3H5 v-if="showP3"></P3H5>
        </div>
        <div class="content" ref="p4">
            <P4H5 v-if="showP4"></P4H5>
        </div>
        <BaseInfoH5></BaseInfoH5>
    </div>
</template>
<script>
import P1H5 from "./P1H5";
import P2H5 from "./P2H5";
import P3H5 from "./P3H5";
import P4H5 from "./P4H5";

export default {
    components: {
        P1H5,
        P2H5,
        P3H5,
        P4H5
    },
    data() {
        return {
            showP1: true,
            showP2: true,
            showP3: true,
            showP4: true
        };
    },
    mounted() {
        // window.setTimeout(() => {
        //     this._scrollEvent();
        // }, 200);
    },
    methods: {
        goUrl() {
            window.location.href = aboutUrl;
        },
        _scrollEvent() {
            let p1 = this.$refs.p1;
            let p2 = this.$refs.p2;
            let p3 = this.$refs.p3;
            let p4 = this.$refs.p4;
            window.addEventListener("scroll", () => {
                let SY = parseInt(window.scrollY);
                if (SY >= p4.offsetTop - 50) {
                    this.showP4 = true;
                } else if (SY >= p3.offsetTop - 50) {
                    this.showP3 = true;
                } else if (SY > p2.offsetTop - 50) {
                    this.showP2 = true;
                } else {
                    this.showP1 = true;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.h5 {
    .content {
        height: 7.53rem;
    }
}
</style>

