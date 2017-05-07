const axios = require('axios');
const prompt = require('prompt');

axios.get('http://localhost:3000/')
.then(response => {
  prompt.start();
  console.log('Name - type - average time - ratio of average');
  response.data.forEach(result => console.log(`${result.mechanic} - ${result.type} - ${result.avg} - ${result.ratio}`));
})
.catch(error => {
  console.log(error);
});
