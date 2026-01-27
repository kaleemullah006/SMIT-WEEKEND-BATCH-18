

// function Car(name, model) {
//     this.name = name;
//     this.model = model;

// };
// Car.prototype.start= function(){
//     console.log(this.name+ "car started");
    
// }

//  let car1 = new Car("ali", 2026)
//   let car2 = new Car("zain", 20262)

//   car1.start();
//   car2.start();

// function Book(title, pages){
//     this.title = title;
//     this.pages= pages
// }

// let book1 = new Book("ijaz e quran", 256)
// let book2 = new Book("hikmat e quran", 356)

// function Book(title, pages){
//     this.title= title;
//     this.pages= pages;

// }
// Book.prototype.info= function (){
//     console.log(`Book  Name: ${this.title}, Pages: ${this.pages}`)
// }

// let  book1 = new Book("fazilat e quran", 399)
// let  book2 = new Book("fazilat e aamal", 99)

// book1.info()
// book2.info()


// function Book(title, pages, author){
//     this.title= title;
//     this.pages= pages;
//     this.author = author

// }
// Book.prototype.info= function (){
//     console.log(`Book  Name: ${this.title}, Pages: ${this.pages}`)
// };

// Book.prototype.isBigBook= function(){
//     if(this.pages> 300){
//         console.log("Big Book")
//     }else{
//         console.log("Small Book")
//     }
// };

// Book.prototype.ShowAuthor = function(){
// console.log(`Author is ${this.author}`)
// }


// let  book1 = new Book("fazilat e quran", 399,"ALLAH")
// let  book2 = new Book("fazilat e aamal", 99, "Haji sahb")

// book1.info()
// book2.info()

// book1.isBigBook()
// book2.isBigBook()

// book1.ShowAuthor()
// book2.ShowAuthor()

class Player {

    constructor(name){
        this.name= name;
        this.score= 0;
        this.wickets= 0;
    }
    addScore(run){
        this.score += run
    }
     showScore(){
console.log(`${this.name}, score is ${this.score}`)

     }

}

let player1 = new Player("kaleem ullah")
let player2 = new Player("Haniya")

player1.addScore(22)
player1.showScore()

function toss(player1,player2){

    let tossWinner =Math.random()< 0.5? player1:player2;
    console.log(`${tossWinner.name} is won the toss`)
    return tossWinner
}
let tossWinner = toss(player1, player2);