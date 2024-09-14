export default {
  routes: [
    {
     method: 'POST',
     path: '/custom/add/candle/:userId',
     handler: 'custom.addCandle',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/custom/add/heart/:userId',
      handler: 'custom.addHeart',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
