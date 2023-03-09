'use strict';

/**
 * service-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-package.service-package');
