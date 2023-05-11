const ProfileModel = require("../models/profile-model");

class ProfileService {
  async getAllProfiles(page, limit, search, city, sortBy, cityOptions) {
    const profiles = await ProfileModel.find({
      $or: [
        { firstname: { $regex: search, $options: "i" } },
        { lastname: { $regex: search, $options: "i" } },
      ],
    })
      .where("city")
      .in([...city])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await ProfileModel.countDocuments({
      city: { $in: [...city] },
      firstname: { $regex: search, $options: "i" },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      city: cityOptions,
      profiles,
    };

    return response;
  }
  async createProfiles(profile) {
    const createdProfile = await ProfileModel.create(profile);
    return createdProfile;
  }
  async getOneProfile(user) {
    if (!user) {
      throw new Error("id undefined");
    }
    const profile = await ProfileModel.findOneAndUpdate(
      { user },
      { $inc: { viewsCount: 1 } },
      {
        returnDocument: "after",
      }
    );
    return profile;
  }
  async updateProfile(profile) {
    if (!profile._id) {
      throw new Error("id undefined");
    }
    const updateProfile = await ProfileModel.findByIdAndUpdate(
      profile._id,
      profile,
      {
        new: true,
      }
    );
    return updateProfile;
  }
  async deleteProfile(id) {
    if (!id) {
      throw new Error("id undefined");
    }
    const profile = await ProfileModel.findByIdAndDelete(id);
    return profile;
  }
}

module.exports = new ProfileService();
