import bcrypt from "bcrypt-nodejs";
import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

// ================================
// User Schema
// ================================
const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    cell: {
      type: String,
      required: false
    },
    bills: [
      {
        type: ObjectId,
        ref: "Bill"
      }
    ],
    billers: [
      {
        type: ObjectId,
        ref: "Biller"
      }
    ],
  },
  {
    timestamps: true
  }
);

// Pre-save of user to database, hash password if password is modified or new
/* eslint-disable consistent-return */
UserSchema.pre("save", function encrypt(next) {
  const user = this;
  const SALT_FACTOR = 5;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, (errTwo, hash) => {
      if (errTwo) return next(errTwo);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function comparePass(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

/* eslint-enable consistent-return */
export default mongoose.model("User", UserSchema);
