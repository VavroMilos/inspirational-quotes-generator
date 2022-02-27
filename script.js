let generate = document.querySelector('button');
let write = document.querySelector('p');

let quotes = [ 
     '"You dont have to see the whole staircase, just take the first step" - Martin Luther King Jr.',
     '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway" - Earl Nightingale',
     '"If I had six hours to chop down a tree, I would spend the first four sharpening the axe" - Abraham Lincoln',
     '"The journey if a thousand miles begins with one step" - Lao Tzu',
     '"Continuous improvement is better than delayed perfection" - Mark Twain',
     '"A boomerang returns back to the preson who throws it" - Vera Nazarian',
     '"Dont turn your face away. Once youve seen, you can no longer act like you dont know" - Vashti Quiroz Vega',
     '"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better." - Samuel Beckett',
     '"If you fell down yesterday, stand up today" - H. G. Wells',,
     '"Dont compare your path with anybody elses. Your path is unique to you." - Ram Dass',
     '"Dont wait for opportunity. Create it" - Unknown',
     '"In the end, we only regret the chances we didnt take" - Unknown',
     '"A great future doesnt require a great past." - Unknown',
]

generate.addEventListener('click', function() {
     var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
     write.innerHTML = randomQuote;
})