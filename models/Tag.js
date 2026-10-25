import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tag name is required"],
      trim: true,
    },

    // Связь "многие ко многим"
    // Один Tag может быть связан с несколькими Article
    articles: [
      {
        // ObjectId статьи
        type: mongoose.Schema.Types.ObjectId,

        // Ссылка на модель Article
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
