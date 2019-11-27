# How to create server project with Express

## Create project

### Initial package.json

```bash
npm init -y
```

### Install startup package

```bash
npm install bcrypt express jsonwebtoken mongoose nodemon
```

## Bootstrap code

```bash
mkdir src
nano index.js
```

```bash
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
```

## Running

```bash
node ./src/index.js | node run dev
```

## Testing

open your browser then `localhost:3000`
