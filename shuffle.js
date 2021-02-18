// function shuffle(sizesRand) {
//     let count = 0;
//     let size = [];
//     let sizesRand = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
//     for (i=0; i<= Math.floor(Math.random() * (5 - count)); i++) {
//       size.push(sizesRand[i]);
//       sizesRand.splice(i, 1);
//       count++;
//       sizesRand = sizesRand.sort(() => Math.random() - 0.5)
//     }
  
//     return size;
//   }

//   module.exports = {shuffle}

function shuffle(sizesRand) {
  return sizesRand[Math.floor(Math.random() * sizesRand.length)]
}

module.exports = {shuffle}