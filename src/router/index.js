import Vue from 'vue';
import Router from 'vue-router';
import {routers} from './router';

Vue.use(Router);

// 路由配置
const RouterConfig = {
    routes: routers
};

export default new Router(RouterConfig);
