const axios = require('axios');
const cheerio = require('cheerio');
const sizeShuffle = require('./shuffle')
let gurl;
let gtype;
let ggender;
let gsubType;

var allClothes = [];

async function pullColor(colorUrl, colorCode) {
    let customUrl = gurl + colorUrl; 
    let count = 0;
    await axios(customUrl)
    .then(response => {
        const html = response.data;
        const color = colorCode;
        const type = gtype;
        const gender = ggender;
        const subType = gsubType;
        const $ = cheerio.load(html,  {
        useHtmlParser2: true,
        withStartIndices: true,
        withEndIndices: true
        });
        const statsTable = $('ol.products.list.items.product-items li');

        statsTable.each(function () {
            countSizes = 0;
            if (count > 7) {
                return;
            }
            count++;
            let sizesRand = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
            for (i=0; i <= Math.floor(Math.random() * (5 - countSizes)); i++) {
                const price = Number($(this).find('.price').text().split('₪')[0].trim());
                const company = $(this).find('.product-item-brand').text().toString().replace(/[\r\n]/g, ' ').trim();
                const image = $(this).find('.product-image-wrapper img').attr('src'); 
                const desc =  $(this).find('.product-image-wrapper img').attr('alt'); 
                const stock = Math.floor(Math.random() * 10) + 1;
                const size = sizeShuffle.shuffle(sizesRand).toString();
                sizesRand.splice(sizesRand.indexOf(size), 1);
                countSizes++;

            if (image != undefined ) {
                allClothes.push({
                    price,
                    company,
                    image,
                    desc,
                    gender,
                    type,
                    color,
                    stock,
                    size,
                    subType               
                });
            }
        }
        });
    })
    .catch(console.error);
}

async function main(typeUrl, tempType, tempGender,tempSubType) {
    gurl = typeUrl;
    gtype = tempType;
    ggender = tempGender;
    gsubType = tempSubType; 
    await pullColor('?color_group=487', '#292929'); // black
    await pullColor('?color_group=491', '#ffffff'); // while
    await pullColor('?color_group=489', '#2990ff'); // blue
    await pullColor('?color_group=490', '#5ca83e'); // green
    await pullColor('?color_group=492', '#f587d8'); // pink
    await pullColor('?color_group=488', '#6b676b'); // Grey
    return allClothes;
}

module.exports = {main};