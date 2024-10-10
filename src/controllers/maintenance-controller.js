import Maintenance from "../models/maintenance-model.js";

export const store = async (req, res) => {
  try {
    const content = await Maintenance.create(req.body);
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Maintenance.find(req.query).exec();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Maintenance.findById(req.params.id)
      .populate("workshop", "vehicle")
      .exec();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await Maintenance.findByIdAndDelete(req.params.id).exec();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
