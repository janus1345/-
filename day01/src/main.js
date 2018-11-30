// main是默认的入口，也可以是多入口
import Vue from 'vue';
import App from './app.vue';

new Vue({

    el: "#app",
    render:function (creater) {
        return creater(App);
        // App包含template/script/style，最终生成Dom结构
        // 
        
    }

})