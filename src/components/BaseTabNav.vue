<template>
    <div class="base-tab-nav">
        <div class="content-tab" ref="content-tab">
            <div
                v-for="(item,index) in tabs"
                :key="`tabs_${index}`"
                class="tab-item"
                @click.stop="select(index)"
            >
                <div :class="{'is-red':isActive(index)}">{{item}}</div>
            </div>
            <div class="line" ref="line"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: [],
            required: true
        },
        selected: {
            type: Number,
            default: 0,
            required: true
        },
        isAbout: {
            type: Boolean,
            default: false
        },
        isHome: {
            type: Boolean,
            default: false
        }
    },
    async mounted() {
        this.select(this.selected);
        this.isFirst = true;
    },
    activated() {
        if (this.isFirst) {
            this.select(this.selected);
        }
    },
    computed: {
        isActive() {
            return index => {
                if (this.selected == index) {
                    return true;
                } else {
                    return false;
                }
            };
        }
    },
    methods: {
        select(index) {
            if (index != 4 && this.isAbout) {
                return window.open(homeUrl);
            }
            if (index == 4 && this.isHome) {
                return window.open(aboutUrl);
            }
            this.$emit("update:selected", index);
            let el = this.$refs["content-tab"].children[index];
            let width = el.children[0].offsetWidth;
            let left = el.offsetLeft + el.children[0].offsetLeft;
            this.$refs["line"].style.width = `${width + 20}px`;
            this.$refs["line"].style.transform = `translateX(${left - 10}px)`;
        }
    }
};
</script>

<style lang="less">
.base-tab-nav {
    height: 100%;
    > .content-tab {
        display: flex;
        height: 100%;
        position: relative;
        > .line {
            position: absolute;
            bottom: -30px;
            width: 10%;
            left: 0px;
            right: 0px;
            height: 4px;
            background-color: #c6182e;
            transition: all 0.4s ease;
        }
        > .tab-item {
            margin-left: 52px;
            height: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            font-size: 16px;
            white-space: nowrap;
            cursor: pointer;
            .is-red {
                color: #c6182e;
            }
        }
    }
}
</style>

