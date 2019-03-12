const fs = require('fs');

fs.writeFile('hello-world.txt', 'Hello to this great world', (err) => {
  if (err) throw err;
  console.log('success')
});
