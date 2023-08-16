// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//getting elements
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const surprise = document.querySelector('.random');


let img = document.querySelector('.img');
let name = document.querySelector('.name');
let job = document.querySelector('.job');
let text = document.querySelector('.text');

let random = 0;
// getting random person
surprise.addEventListener('click', function () {
   random = Math.floor(Math.random() * reviews.length)
    getPerson(random)
    console.log(random)
})

// get person
function getPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    text.textContent = item.text;
    job.textContent = item.job;
}

// get next person

next.addEventListener("click", function () {
    random++;
    if (random >= reviews.length) {
        random = 0
    }
    getPerson(random)
})

//get previous person

prev.addEventListener("click", function () {
    random--;
    if (random < 0) {
        random = reviews.length - 1
    }
    getPerson(random)
 } )
