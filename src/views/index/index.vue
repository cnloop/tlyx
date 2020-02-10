<template>
    <div class="home">
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
    },
    methods: {
        _resize() {
            window.addEventListener("resize", () => {
                if(this.mobileClient){
                    
                }
            });
        }
    }
};
</script>


