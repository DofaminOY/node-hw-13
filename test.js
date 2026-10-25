// import "dotenv/config";
// import mongoose from "mongoose";

// import Publisher from "./models/Publisher.js";
// import Magazine from "./models/Magazine.js";

// const MONGO_URL = process.env.MONGO_URL;

// async function testModels() {
//   try {
//     // Подключаемся к MongoDB
//     await mongoose.connect(MONGO_URL);

//     console.log("MongoDB successfully connected");

//     // Создаём издателя
//     const publisher = await Publisher.create({
//       name: "Tech Publisher",
//       location: "Berlin",
//     });

//     // Создаём журнал и сохраняем ссылку на Publisher
//     const magazine = await Magazine.create({
//       title: "Node.js Magazine",
//       issueNumber: 1,
//       publisher: publisher._id,
//     });

//     // populate()
//     // Вместо ObjectId подставляет данные Publisher
//     const result = await Magazine.findById(magazine._id).populate("publisher");

//     console.log(result);
//   } catch (error) {
//     console.error("Test error:", error.message);
//   } finally {
//     await mongoose.connection.close();

//     console.log("MongoDB connection closed");
//   }
// }

// testModels();
import "dotenv/config";
import mongoose from "mongoose";

import Tag from "./models/Tag.js";
import Article from "./models/Article.js";

const MONGO_URL = process.env.MONGO_URL;

async function testModels() {
  try {
    // Подключаемся к MongoDB
    await mongoose.connect(MONGO_URL);

    console.log("MongoDB successfully connected");

    // Создаём тег
    const tag = await Tag.create({
      name: "Node.js",
      articles: [],
    });

    // Создаём статью и добавляем ссылку на Tag
    const article = await Article.create({
      title: "Mongoose Relations",
      content: "Testing many-to-many relation",
      tags: [tag._id],
    });

    // Добавляем ссылку на Article в Tag
    tag.articles.push(article._id);

    // Сохраняем изменения Tag
    await tag.save();

    // populate()
    // Вместо ObjectId подставляет данные Tag
    const articleWithTags = await Article.findById(
      article._id
    ).populate("tags");

    // Вместо ObjectId подставляет данные Article
    const tagWithArticles = await Tag.findById(
      tag._id
    ).populate("articles");

    console.log("ARTICLE WITH TAGS:");
    console.log(articleWithTags);

    console.log("TAG WITH ARTICLES:");
    console.log(tagWithArticles);
  } catch (error) {
    console.error("Test error:", error.message);
  } finally {
    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  }
}

testModels();