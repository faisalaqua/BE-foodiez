const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    firstName: { type: String },
    lastName: { type: String },
  },
  {
    timestamps: true,
  }
);

// REVIEW: This line ios for slugs, we dont have slugs for users, remove it please
UserSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=username%>" });

module.exports = mongoose.model("User", UserSchema);
