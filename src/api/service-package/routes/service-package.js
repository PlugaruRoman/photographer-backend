'use strict';

/**
 * service-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-package.service-package');
