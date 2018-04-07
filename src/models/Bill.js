import bcrypt from "bcrypt-nodejs";
import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

// ================================
// Bill Schema
// ================================
const BillSchema = new Schema(
  {
    billId: {
      type: Number,
      unique: true,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    billerId: {
      type: String,
      required: true,
    },
    biller: {
      type: ObjectId,
      ref: "Biller"
    },
    billerStatusId: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);


/* eslint-enable consistent-return */
export default mongoose.model("Bill", BillSchema);
