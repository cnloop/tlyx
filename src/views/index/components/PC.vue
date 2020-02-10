<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="pc">
        <Nav @move="move" ref="nav"></Nav>
        <div class="p-content">
            <p1 v-if="showP1"></p1>
        </div>
        <div class="p-content">
            <P2 v-if="showP2"></P2>
        </div>
        <div class="p-content">
            <P3 v-if="showP3"></P3>
        </div>
        <div class="p-content">
            <P4 v-if="showP4"></P4>
        </div>
        <BaseInfo :isHome="true"></BaseInfo>
    </div>
</template>

<script>
import anime from "animejs";
import Nav from "./Nav";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";
import { mouseScroll, throttle } from "_func/func";
export default {
    components: {
        Nav,
        P1,
        P2,
        P3,
        P4
    },
    data() {
        return {
            CH: 0,
            index: 0,
            showP1: true,
            showP2: false,
            showP3: false,
            showP4: false
        };
    },
    async mounted() {
        this.getCH();
        await this.$nextTick();
        this._scrollEvent();
        window.setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
        this._mouseEvent();
    },
    methods: {
        async getCH() {
            await this.$nextTick();
            this.CH = document.documentElement.clientHeight;
            let pContent = document.getElementsByClassName("p-content");
            for (var i = 0; i < pContent.length; i++) {
                pContent[i].style.height = this.CH + "px";
            }
        },
        move(index) {
            if (index <= 3) {
                console.log(index);
                this.$refs.nav.sel(index);
            }
            this.index = index;
            let obj = {
                y: window.scrollY
            };
            anime({
                targets: obj,
                y: index * this.CH,
                easing: "easeInOutSine",
                duration: 400,
                update: function() {
                    window.scrollTo(0, obj.y);
                }
            });
        },
        _scrollEvent() {
            window.addEventListener("scroll", () => {
                let SY = parseInt(window.scrollY);
                if (SY >= this.CH * 3 - 400) {
                    this.showP4 = true;
                } else if (SY >= this.CH * 2 - 400) {
                    this.showP3 = true;
                } else if (SY > 400) {
                    this.showP2 = true;
                } else {
                    this.showP1 = true;
                }
            });
        },
        _mouseEvent() {
            mouseScroll(v => {
                if (v > 0) {
                    let result = this.index - 1;
                    console.log(result <= 0 ? 0 : result);
                    this.move(result <= 0 ? 0 : result);
                } else {
                    let result = this.index + 1;
                    console.log(result >= 4 ? 4 : result);
                    this.move(result >= 4 ? 4 : result);
                }
            });
        }
    }
};
</script>
<style lang="less" scoped>
.body {
    overflow-x: hidden;
}
.pc {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
