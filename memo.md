# NodeJS

## Scaffold Settings

- express --view=pug Project
- cd Project
- npm install
- npx npm-check-updates -u
- npm install
- code .

## Add Development Dependency

- npm install --save-dev nodemon

## Add Dependency

- npm install --save-dev jest
- npm install cors --save
- npm install helmet
- npm install mongoose --save
- npm install multer --save
- npm install bcrypt
- npm install socket.io --save
- npm i dotenv
- npm install body-parser --save
- npm install method-override --save
- npm install jsonwebtoken
- npm install moment
- npm install async
- npm instal winston winston-daily-rotate-file date-utils

```json
 "scripts": {
    "start": "nodemon ./bin/www",
    "test": "jest"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
```

## Git Settings

- **_create .gitignore file_**
- git init
- git diff
- git add .
- git status
- git commit -m "init"
- git commit --amend -m "update"
- git log --all --graph --oneline
- `git remote add origin https://github.com/jsh-1235/express-jest-tutorial.git`
- git remote -v
- git branch
- git checkout master
- git push -u origin master

## Start

- npm start
- `start http://localhost:port`

## heroku

- heroku logs --tail --app express-jest-tutorial

## Test

- npm test
