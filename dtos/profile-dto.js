module.exports = class ProfileDto {
  firstname;
  lastname;
  email;
  phone;
  city;
  company;
  price;
  about;
  facebook;
  instagram;
  web;
  id;

  constructor(model) {
    this.firstname = model.firstname;
    this.lastname = model.lastname;
    this.email = model.email;
    this.phone = model.phone;
    this.city = model.city;
    this.company = model.company;
    this.price = model.price;
    this.about = model.about;
    this.facebook = model.facebook;
    this.instagram = model.instagram;
    this.web = model.web;
    this.id = model._id;
  }
};
