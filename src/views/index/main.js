import '../../style/index.less';
import Vue from "vue";
import index from "./index.vue";
// import router from './router'
// import store from './store'

import "../../func/rem"; // rem adapter (750px)
import "../../register";
new Vue({
    //   router,
    //   store,
    render: h => h(index)
}).$mount("#app");
