import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  specialties: {
    type: [String],
    required: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Maintenances",
  },
});

const Workshop = model("Workshop", workshopSchema);

export default Workshop;
