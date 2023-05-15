const ProfileModel = require("../models/profile-model");

class ProfileService {
  async getAllProfiles(page, limit, search, country, sortBy, countryOptions) {
    const profiles = await ProfileModel.find({
      $or: [
        { firstname: { $regex: search, $options: "i" } },
        { lastname: { $regex: search, $options: "i" } },
      ],
    })
      .where("country")
      .in([...country])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await ProfileModel.countDocuments({
      country: { $in: [...country] },
      firstname: { $regex: search, $options: "i" },
    });

    const response = {
      total,
      page: page + 1,
      limit,
      country: countryOptions,
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
