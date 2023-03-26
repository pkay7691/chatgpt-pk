// 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
const  { Configuration, OpenAIApi } = require ("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-lkAuakCMwFaLoHEQtdWeU0GZ",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);



async function callApi() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
}


// create a simple express api that calls the function above


const app = express()
const port = 3080

app.post('/',  async (req, res) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json({
      data: response.data
    })
  })


app.listen(port, () => {
  console.log(`Chatgpt-PK listening at http://localhost:${port}`)
})



