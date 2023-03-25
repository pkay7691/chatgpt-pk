// 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
const  { Configuration, OpenAIApi } = require ("openai");
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

callApi()
