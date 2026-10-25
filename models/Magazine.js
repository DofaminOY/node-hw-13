import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Magazine title is required"],
      trim: true,
    },

    issueNumber: {
      type: Number,
      required: [true, "Issue number is required"],
      min: 1,
    },

    // Связь "один ко многим"
    // Один Publisher может иметь много Magazine
    publisher: {
      // ObjectId хранит _id документа Publisher
      type: mongoose.Schema.Types.ObjectId,

      // ref указывает, с какой моделью связана ссылка
      ref: "Publisher",

      required: [true, "Publisher is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Magazine = mongoose.model("Magazine", magazineSchema);

export default Magazine;
