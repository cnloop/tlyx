<template>
    <div class="h5">
        <BaseNavH5 :title="'首页'" @goUrl="goUrl"></BaseNavH5>
        <BaseTopH5></BaseTopH5>
        <C1H5></C1H5>
        <C2H5></C2H5>
        <BaseInfoH5></BaseInfoH5>
    </div>
</template>
<script>
import C1H5 from "./C1H5";
import C2H5 from "./C2H5";
export default {
    components: {
        C1H5,
        C2H5
    },
    methods: {
        goUrl() {
            window.location.href = homeUrl;
        }
    }
};
</script>

<style lang="less" scoped>
</style>

