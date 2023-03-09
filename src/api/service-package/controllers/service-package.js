'use strict';

/**
 * service-package controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-package.service-package');
