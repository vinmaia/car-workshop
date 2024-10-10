import { Schema, model } from "mongoose";
import Maintenances from "../controllers/maintenance-controller.js";

const vehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
    minLength: 7,
    maxLength: 7,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator(v) {
        return /\b(188[7-9]|18[9]\d|19\d{2}|200\d|201\d|202[0-4])\b/.test(v);
      },
    },
  },
  owner: {
    type: String,
    required: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Maintenances,
  },
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
