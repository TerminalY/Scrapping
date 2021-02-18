let pullClothes = require('./PullClothes');
const axios = require('axios');


(async function() {
    const asyncFunctions = [
        // men
    // pullClothes.main('https://www.terminalx.com/men/shirts/sleevless-tops','shirts','m','sleevless'),
    // pullClothes.main('https://www.terminalx.com/men/shirts/tshirts','shirts','m','tshirts'),
    // pullClothes.main('https://www.terminalx.com/men/jackets-coats/coats','jackets-coats','m','coats'),
    // pullClothes.main('https://www.terminalx.com/men/jackets-coats/jackets','jackets-coats','m','jackets'),
    // pullClothes.main('https://www.terminalx.com/men/pants/jeans','pants','m','jeans'),
    // pullClothes.main('https://www.terminalx.com/men/pants/sport-pants','pants','m','sport-pants'),
    // pullClothes.main('https://www.terminalx.com/men/shoes/sneakers-sports','shoes','m','sneakers-sports'),
    // pullClothes.main('https://www.terminalx.com/men/shoes/elegant','shoes','m','elegant'),


    // women
    // pullClothes.main('https://www.terminalx.com/women/tops/tank-tops','tops','f','tank-tops'),
    // pullClothes.main('https://www.terminalx.com/women/tops/tshirts','tops','f','tshirts'),
    // pullClothes.main('https://www.terminalx.com/women/jackets-coats/jackets','jackets-coats','f','jackets'),    
    // pullClothes.main('https://www.terminalx.com/women/jackets-coats/coats','jackets-coats','f','coats'),
    // pullClothes.main('https://www.terminalx.com/women/shoes/sneakers','shoes','f','sneakers'),
    // pullClothes.main('https://www.terminalx.com/women/shoes/heels','shoes','f','heels'),
    // pullClothes.main('https://www.terminalx.com/women/pants-skirts/jeans','pants-skirts','f','jeans'),
    pullClothes.main('https://www.terminalx.com/women/pants-skirts/shorts','pants-skirts','f','shorts'),

    ];
    const results = await Promise.all(asyncFunctions);

    // outputs 
    results.forEach(items => {
        items.forEach(item => {
            axios
            .post('http://localhost:3000/clothes', item)
            .then(res => {
            //   console.log(`statusCode: ${res.statusCode}`)
            })
            .catch(error => {
              console.error(error)
            });
        })
    })
  })();
