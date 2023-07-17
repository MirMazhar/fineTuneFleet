import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
        // when you run node listFineTunes.js it will return something like this
        // created_at: 1689632755,
        // updated_at: 1689632755,
        // status: 'pending',
        // fine_tuned_model: null

      model: 'your-custom-model-name', //fine_tuned_model will be here after status: 'succeeded',
      prompt: 'Do you offer free shipping?',
      max_tokens: 200
    })
    if (response.data) {
        // it will give you yor response
        // remember more the date mre accurate answer is
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()