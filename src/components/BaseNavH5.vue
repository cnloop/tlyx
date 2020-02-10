<template>
    <div class="base-nav-h5">
        <img class="left" src="@images/logo.png" />
        <div class="right">
            <div class="text" @click.stop="goUrl">{{title}}</div>
            <img src="@images/p1-3.png" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "关于我们"
        }
    },
    methods: {
        goUrl() {
            this.$emit("goUrl");
        }
    }
};
</script>
<style lang="less" scoped>
.base-nav-h5 {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 1.44rem;
    padding: 0px 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f7fb;
    z-index: 1;
    .left {
        width: 1.76rem;
    }
    .right {
        display: flex;
        align-items: center;
        .text {
            color: #292f3d;
            font-size: 0.28rem;
        }
        img {
            margin-left: 0.16rem;
            width: 0.31rem;
        }
    }
}
</style>


