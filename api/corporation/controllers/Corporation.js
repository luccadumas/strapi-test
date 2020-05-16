'use strict';

/**
 * Corporation.js controller
 *
 * @description: A set of functions called "actions" for managing `Corporation`.
 */

module.exports = {

  /**
   * Retrieve corporation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.corporation.search(ctx.query);
    } else {
      return strapi.services.corporation.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a corporation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.corporation.fetch(ctx.params);
  },

  /**
   * Count corporation records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.corporation.count(ctx.query, populate);
  },

  /**
   * Create a/an corporation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.corporation.add(ctx.request.body);
  },

  /**
   * Update a/an corporation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.corporation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an corporation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.corporation.remove(ctx.params);
  }
};
