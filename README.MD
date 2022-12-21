# Virtual Baby Groot Pet

## Site: https://groot-virtual-pet.netlify.app/

<img src="./images and sounds/readme img.JPG" alt="picture of homepage" style="width:600px;">

Have you ever picked up your tamagotchi and thought:
"Gee whiz I really wish I could play this but with baby Groot from the critically acclaimed Marvels Guardians of the Galaxy"

Well then this is the project for you!

## How to Play

Your goal is to keep Baby Groot alive until he is 15 days old and able to safely grow out of his flower pot.

You'll have to manage Groots health & hunger.

## Guide

- If Baby Groots fitness drops below 0 he will die!

- If Baby Groots hunger is over 10 he will die!

- Don't panic! Baby Groot will tell you how he is feeling.

## Project setup

Install Jest using `npm`:

```bash
npm install --save-dev jest
```

Add the following section to your `package.json`:

```json
"jest":{
    "testEnvironment": "jsdom"
},
{
  "scripts": {
    "test": "jest"
  }
}
```

If you are using jest 28+, you will need to install `jest-environment-jsdom` using `npm`:

```bash
npm i jest-environment-jsdom --save-dev
```

## Features to Implement

- [x] Animations between game screens
- [ ] Make Groots eyes follow the cursor

## Credit

Baby Groot CSS & Animation designed by @baumannzone

Copyright (c) 2022 by Jorge Baumann (https://codepen.io/baumannzone/pen/yLVKyqV)
