<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="pc">
        <Nav></Nav>
        <C1></C1>
        <C2></C2>
        <BaseTop :height="150"></BaseTop>
        <BaseInfo :isAbout="true"></BaseInfo>
    </div>
</template>

<script>
import Nav from "./Nav";
import C1 from "./C1";
import C2 from "./C2";
export default {
    components: {
        Nav,
        C1,
        C2
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
