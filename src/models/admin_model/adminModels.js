const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    /*  firstName: {
          type: String,
          required: false,
          trim: true,
          min: 3,
          max: 20,
      },
      lastName: {
          type: String,
          required: false,
          trim: true,
          min: 3,
          max: 20,
      },*/
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        required: true,
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "admin",
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
}, { timestamps: true });

adminSchema.virtual('password')
    .set(function(password) {
        this.hash_password = bcrypt.hashSync(password, 10);
    });
/*
adminSchema.virtual("fullName").get(function() {
    return `${this.firstName} ${this.lastName}`;
});*/

adminSchema.methods = {
    authenticate: async function(password) {
        return bcrypt.compareSync(password, this.hash_password);
    },
};

module.exports = mongoose.model("Admin", adminSchema);