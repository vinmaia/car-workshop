import { Schema, model } from "mongoose";

const maintenancesSchema = new Schema({
  workshop: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Workshop",
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Vehicle",
  },
  services: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
    default: function () {
      return this.services.reduce((total, service) => total + service.price, 0);
    },
  },
});

maintenancesSchema.pre("save", function (next) {
  this.totalPrice = this.services.reduce(
    (total, service) => total + service.price,
    0
  );
  next();
});

const Maintenances = model("Maintenances", maintenancesSchema);

export default Maintenances;
