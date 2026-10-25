import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Publisher name is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Publisher location is required"],
      trim: true,
    },
  },
  {
    // Автоматически создаёт createdAt и updatedAt
    timestamps: true,

    // Не создаёт поле __v
    versionKey: false,
  },
);

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
