import App from '../app';
import ChargeCarRank from '../pages/chargeCarRank';
import NoFound from '../pages/notFound';

const proPath = [
  {
    // 一级路由配置
    path: '/',
    component: App,
    // 相关子路由配置
    children: [
      // 二级路由为空重定向到指定页
      {
        path: '',
        redirect: '/chargeCarRank'
      },
      // 定义充电排行路由
      {
        path: '/chargeCarRank',
        component: ChargeCarRank
      }
    ]
  },
  // 无匹配路由重定向到404
  {
    path: '*',
    component: NoFound
  }
];

export default proPath;
