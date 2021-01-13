const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Hey! My name is ${answer}!`);
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`One of my favourite things to do is ${answer2}.`);
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`When I'm doing that, I like to listen to ${answer3}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`My favourite meal is ${answer4}`);
        rl.question(`What's your favourite thing to eat for that ${answer4}? `, (answer5) => {
          console.log(`My favourite thing to eat for ${answer4} is ${answer5}`);
          rl.question("What's favourite sport? ", (answer6) => {
            console.log(`My favourite sport is ${answer6}`);          
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`My superpower is: ${answer7}`);          
            console.log(`Hey everyone! I'm ${answer}! My favourite thing to do is ${answer2}! I do it constantly! \nWhile I'm doing that, I typically like to listen to ${answer3}. It just gets me in the mood, if \n you know what I mean ;) My favourite meal is DEFINITELY ${answer4}, I could eat ${answer5} every \nsingle day. I also love sports. My favourite is ${answer6}, but I'm basically amazing at all of them. \nAnd finally, ${answer7}`)
              rl.close();              
            })                      
          })
        })                  
      })
    })
  })
});
