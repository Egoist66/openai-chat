const express = require('express');

require('dotenv').config();
const cors = require('cors');
const bodyparser = require('body-parser');

const {Configuration, OpenAIApi} = require('openai');


const app = express();
const PORT = 3001;


app.use(bodyparser.json());
app.use(cors());


const configuration = new Configuration({
    apiKey: process.env.CHATBOT_KEY,
    
});

const openai = new OpenAIApi(configuration);

app.post('/chat', async (req, res) => {
    const {prompt} = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 2048
    });

    res.send(completion.data.choices[0].text)

})


app.listen(PORT, (err) => {
    if(err){
        throw new Error(err);
    }

    console.log(`Server listening to http://localhost:${PORT}`);
})