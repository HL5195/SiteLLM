"use strict";

const express = require("express");
const app = express();


//used to fix this error 
//set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
const cors = require("cors");
app.use(cors());

const { OpenAI } = require("openai");
const client = new OpenAI({ apiKey: process.env.OPENAI_APIKEY });

app.get("/llm/:query", async (req, res) => {
  try {
    console.log(req.params.query)
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: req.params.query
        }
      ]
    });

    const result = response.choices[0]?.message?.content || "No response";
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
