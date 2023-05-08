const packageService = require("../service/package-service");

class PackageController {
  async getPackages(req, res, next) {
    try {
      const packages = await packageService.getAllPackages();
      return res.json(packages);
    } catch (e) {
      next(e);
    }
  }
  async createPackages(req, res, next) {
    try {
      const packages = await packageService.createPackages(req.body);
      return res.json(packages);
    } catch (e) {
      next(e);
    }
  }

  async getOnePackage(req, res, next) {
    try {
      const packages = await packageService.getOnePackage(req.params.id);
      return res.json(packages);
    } catch (e) {
      next(e);
    }
  }
  async updatePackage(req, res, next) {
    try {
      const updatePackage = await packageService.updatePackage(req.body);
      return res.json(updatePackage);
    } catch (e) {
      next(e);
    }
  }
  async deletePackage(req, res, next) {
    try {
      const deletePackage = await packageService.deletePackage(req.params.id);
      return res.json(deletePackage);
    } catch (e) {
      next(e);
    }
  }
  async getPackagesExample(req, res, next) {
    try {
      const packages = await packageService.getPackagesExample();
      return res.json(packages);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PackageController();
