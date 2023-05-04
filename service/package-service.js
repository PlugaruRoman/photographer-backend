const PackageModel = require("../models/package-model");

class PackageService {
  async getAllPackages() {
    const profiles = await PackageModel.find();
    return profiles;
  }
  async createPackages(profile) {
    const createdPackage = await PackageModel.create(profile);
    return createdPackage;
  }
  async getOnePackage(user) {
    if (!user) {
      throw new Error("id undefined");
    }
    const packages = await PackageModel.findOne({ user });
    return packages;
  }
  async updatePackage(post) {
    if (!post._id) {
      throw new Error("id undefined");
    }
    const updatePackage = await PackageModel.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatePackage;
  }
  async deletePackage(id) {
    if (!id) {
      throw new Error("id undefined");
    }
    const packages = await PackageModel.findByIdAndDelete(id);
    return packages;
  }
}

module.exports = new PackageService();
