import bcrypt from "bcrypt-nodejs";
import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

// ================================
// Biller Schema
// ================================
const BillerSchema = new Schema(
  {
    billerId: {
      type: Number,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    street1: {
      type: String,
      required: true,
    },
    street2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    zip: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    lobAddressId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true
  },
);


/* eslint-enable consistent-return */
export default mongoose.model("Biller", BillerSchema);
