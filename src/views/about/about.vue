<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="about">
        <PC v-if="!isMobile"></PC>
        <H5 v-if="isMobile"></H5>
    </div>
</template>

<script>
import PC from "./components/PC";
import H5 from "./components/H5";
import { isMobile } from "_func/func";
export default {
    data() {
        return {
            mobileClient: false
        };
    },
    components: {
        PC,
        H5
    },
    computed: {
        isMobile() {
            this.mobileClient = isMobile();
            return this.mobileClient;
        }
    }
};
</script>
<style lang="less" scoped>
.body {
    overflow-x: hidden;
}
.about {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
