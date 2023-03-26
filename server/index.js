// 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
const  { Configuration, OpenAIApi } = require ("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-lkAuakCMwFaLoHEQtdWeU0GZ",
    apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

// add cors and body parser to express  
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(bodyParser.json())




const port = 3080

app.post('/',  async (req, res) => {
  const {message} = req.body
  console.log(message, 'message')
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 1000,
      temperature: 0.5,
    });
    console.log()
    res.json({
      message: response.data.choices[0].text
    })
  })


app.listen(port, () => {
  console.log(`Chatgpt-PK listening at http://localhost:${port}`)
})



