import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "YOUR GPT SECRETE KEY" //replace with your api key
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)