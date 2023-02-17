'use strict';

/**
 * photographer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photographer.photographer');
