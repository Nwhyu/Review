// local reviews data 
const reviews = [
  {
    id: 1, 
    name: Squidward,
    job: Cashier at the Krusty Krab,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Squidward_Tentacles_%28fair_use%29.svg/300px-Squidward_Tentacles_%28fair_use%29.svg.png",
    text: "Squidward Tentacles is a fictional character from the animated series SpongeBob SquarePants. He is an octopus who lives in a moai house and works as a cashier at the Krusty Krab. He is often annoyed by his neighbors SpongeBob and Patrick, who consider him a friend. He likes to play the clarinet and make art, but he is not very good at either. He is usually grumpy, sarcastic, and unhappy with his life",
  },
  {
    id: 2,
    name: Mr.Krab,
    job: Owner ,and, Manager ,of ,the ,Krusty ,Krab,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/440px-Mr._Krabs.svg.png",
    text: "Mr. Krabs is a fictional character from the animated series SpongeBob SquarePants. He is a red crab who owns the Krusty Krab, a fast food restaurant in Bikini Bottom. He is very greedy and loves money more than anything else. He has a daughter named Pearl, who is a whale, and a girlfriend named Mrs. Puff, who is a pufferfish. He is also the former navy cadet and pirate captain. He often competes with his rival Plankton, who tries to steal his secret recipe for the Krabby Patty",
  },
  {
    id: 3, 
    name: Sheldon J. Plankton and Karen Plankton,
    job: co-owners and founder of the Chum Bucket,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Plankton_and_Karen.svg/440px-Plankton_and_Karen.svg.png",
    text: "Sheldon J. Plankton and Karen Plankton are the main antagonists of the animated series SpongeBob SquarePants. They are a married couple who run the Chum Bucket, a failing restaurant that competes with the Krusty Krab, owned by Mr. Krabs. Plankton is a small green copepod who is obsessed with stealing the secret formula for the Krabby Patty, a popular burger that Mr. Krabs sells. Karen is a waterproof supercomputer who helps Plankton with his schemes, but also criticizes him for his failures. They are both voiced by Mr. Lawrence and Jill Talley, respectively.",
  },
];

// select items 
const img = document.getElementById("character-img");
const character = document.getElementById("character");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currenItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded",function(){
    showCharacter();
});

//show character based on item 

function showCharacter() {
    const item = reviews[currenItem];
    img.src = item.img;
    character.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next character 

nextBtn.addEventListener("click", function(){
    currenItem++;
    if(currenItem > review.length - 1){
        currenItem = 0;
    }
    showCharacter();
});
//show prev character

prevBtn.addEventListener("click", function(){
    currenItem--;
    if(currenItem < 0){
        currenItem = reviews.length -1
    }
    showCharacter();
});

// show random character 
randomBtn.addEventListener("click", function(){
    currenItem = Math.floor(Math.random() * reviews.length);
    console.log(currenItem);
    showCharacter();
});