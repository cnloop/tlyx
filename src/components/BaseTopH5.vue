<template>
    <div class="base-top" ref="baseTop"></div>
</template>
<script>
export default {
    props: {
        height: {
            default: "1.44rem"
        },
        color: {
            default: "rgba(0,0,0,0)"
        }
    },
    mounted() {
        this.$refs.baseTop.style.height = this.height;
        this.$refs.baseTop.style.backgroundColor = this.color;
    }
};
</script>
