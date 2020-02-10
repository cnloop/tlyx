import '../../style/index.less';
import Vue from "vue";
import about from "./about.vue";
// import router from './router'
// import store from './store'


import '../../func/rem'; // rem adapter (750px)
import "../../register";

new Vue({
    //   router,
    //   store,
    render: h => h(about)
}).$mount("#app");
