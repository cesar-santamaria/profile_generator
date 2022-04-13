/* 
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
  console.log(`Thank you for your valuable feedback ${name}`);
  rl.question( `What's an activity you like doing?`, (favoriteActivity) => {
    console.log(`Thank you for your valuable feedback: ${favoriteActivity}`);  
    rl.question(`What do you listen to while doing that?`, (music) => {
      console.log(`Thank you for your valuable feedback: ${music}`);
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc)`, (favoriteMealTime) => {
        console.log(`Thank you for your valuable feedback: ${favoriteMealTime}`);
        rl.question(`What's your favourite thing to eat for that meal?`, (favoriteFood) => {
          console.log(`Thank you for your valuable feedback: ${favoriteFood}`);
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            console.log(`Thank you for your valuable feedback: ${sport}`);
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {
              console.log(`Thank you for your valuable feedback: ${superpower}`);
              console.log(`${name} loves listening to ${music} while ${favoriteActivity}, devouring ${favoriteFood} for ${favoriteMealTime}, prefers ${sport} over any other sport, and says their superpower in a few words is ${superpower}.`)
              rl.close()
            });
          });
        });
      });
    });
  });
});