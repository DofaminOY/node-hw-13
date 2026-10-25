import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Article title is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Article content is required"],
      trim: true,
    },

    // Связь "многие ко многим"
    // Один Article может иметь несколько Tag
    tags: [
      {
        // ObjectId тега
        type: mongoose.Schema.Types.ObjectId,

        // Ссылка на модель Tag
        ref: "Tag",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
