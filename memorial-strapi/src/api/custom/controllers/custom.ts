/**
 * A set of functions called "actions" for `custom`
 */


export default {
  addCandle: async (ctx, next) => {
    try {
      const userId = ctx.params.userId;

      const user = await strapi.entityService.findOne(
        'api::memorial-user.memorial-user',
        userId,
      );

      await strapi.entityService.update(
        'api::memorial-user.memorial-user',
        userId,
        {
          data: {
            candlesCount: user.candlesCount + 1,
          },
        },
      );

      return {
        code: 200,
        message: `Success!`,
      };
    } catch (e) {
      return {
        code: 500,
        message: `Error! ${e}`,
      };
    }
  },
  addHeart: async (ctx, next) => {
    try {
      const userId = ctx.params.userId;

      const user = await strapi.entityService.findOne(
        'api::memorial-user.memorial-user',
        userId,
      );

      await strapi.entityService.update(
        'api::memorial-user.memorial-user',
        userId,
        {
          data: {
            supportCount: user.supportCount + 1,
          },
        },
      );
      return {
        code: 200,
        message: `Success!`,
      };
    } catch (e) {
      return {
        code: 500,
        message: `Error! ${e}`,
      };
    }
  },
};
