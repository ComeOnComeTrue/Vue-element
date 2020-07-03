import Vue from 'vue';
import Element from '@element';

import '@/assets/theme-chalk/display.scss'; // 媒体查询样式 xs md lg 。。。
import '@/assets/theme-chalk/index.scss'; // 引入样式

Vue.use(Element);// 当使用use时它会调用row里面的install方法并传有一个参数就是Vue本身
