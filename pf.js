
const description1 = document.getElementById('description1');
const btnone = document.getElementById('btnone');

btnone.addEventListener('click', function handleClick() {
  if (description1.style.display === 'none') {
    description1.style.display = 'block';

    btnone.textContent = 'Hide';
  } else {
    description1.style.display = 'none';

    btnone.textContent = 'läs mer';
 

  }
});






const descriptiontwo = document.getElementById('descriptiontwo');
const ha = document.getElementById('btntwo');

btntwo.addEventListener('click', function handleClick() {
  if (descriptiontwo.style.display === 'none') {
    descriptiontwo.style.display = 'block';

    btntwo.textContent = 'Hide';
  } else {
    descriptiontwo.style.display = 'none';

    btntwo.textContent = 'Read more';
  }
});


const descriptionthree = document.getElementById('description3');
const btnthree = document.getElementById('btnthree');

btnthree.addEventListener('click', function handleClick() {
  if (descriptionthree.style.display === 'none') {
    descriptionthree.style.display = 'block';

    btnthree.textContent = 'Hide';
  } else {
    descriptionthree.style.display = 'none';

    btnthree.textContent = 'Read more';
 

  }
});





