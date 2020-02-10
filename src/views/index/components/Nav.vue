<template>
    <div class="nav">
        <div class="content">
            <img class="left" src="@images/logo.png" />
            <div class="right">
                <BaseTabNav ref="btn" :tabs="tabs" :selected.sync="selected" :isHome="true"></BaseTabNav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: ["首页", "时尚", "优质", "分享", "关于我们"],
            selected: 0
        };
    },
    methods: {
        sel(index) {
            this.$refs.btn.select(index);
        }
    },
    watch: {
        selected: function() {
            this.$emit("move", this.selected);
        }
    }
};
</script>

<style lang="less" scoped>
.nav {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .content {
        width: 1200px;
        height: 94px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .right {
            display: flex;
            align-items: center;
        }
    }
}
</style>
