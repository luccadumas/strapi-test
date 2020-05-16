'use strict';

/**
 * Employee.js controller
 *
 * @description: A set of functions called "actions" for managing `Employee`.
 */

module.exports = {

  /**
   * Retrieve employee records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.employee.search(ctx.query);
    } else {
      return strapi.services.employee.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a employee record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.employee.fetch(ctx.params);
  },

  /**
   * Count employee records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.employee.count(ctx.query, populate);
  },

  /**
   * Create a/an employee record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.employee.add(ctx.request.body);
  },

  /**
   * Update a/an employee record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.employee.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an employee record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.employee.remove(ctx.params);
  }
};
