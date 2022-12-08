const request = require('request');
const readlineSync = require('readline-sync');
const ora = require('ora');

const openai = require('openai');
openai.apiKey = 'Masukkan API Key Anda dari OpenAI';

// Print a prompt to the user
console.log('Masukkan Perintah:');

// Read a line of input from the user and store it in a variable
const command = readlineSync.prompt();
const spinner = ora('Loading...').start();
const prompt = command;
const model = 'text-davinci-002';

const options = {
    method: 'POST',
    url: 'https://api.openai.com/v1/completions',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openai.apiKey}`
    },
    json: true,
    body: {
        prompt: prompt,
        model: model,
        max_tokens: 1024,
        n: 1,
        temperature: 0.5,
    }
};
request(options, function (error, response, body) {
    spinner.stop();
    if (error) throw new Error(error);

  console.log(body.choices[0].text);
});