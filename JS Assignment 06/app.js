// // let text =
// //   "world war II changed history in many countries, and many nations were involved during world war II. People remember world war II for its global impact, as technology advanced rapidly because of world war II. Families were deeply affected by world war II, and lessons were learned from the events of world war II. Books and films often focus on world war II, and today, students still study world war II in school.";

// // // for (let i = 0; i < text.length; i++) {
// // //   const targetWord = "world war II";
// // //   const newWord = "Second World War";
// // //   const targetWordLenght = targetWord.length;

// // //   const startIndexOfTargetElement = text.indexOf(targetWord);

// // //   const endIndexOfTargetElement =
// // //     startIndexOfTargetElement + targetWordLenght - 1;

// // //   if (startIndexOfTargetElement != -1) {
// // //     const earlierPart = text.slice(0, startIndexOfTargetElement);

// // //     const afterPart = text.slice(endIndexOfTargetElement + 1);

// // //     text = earlierPart + newWord + afterPart;
// // //     // debugger;
// // //   }

// // //   // debugger;
// // // }
// // // text = text.replace("world war II","second world war")
// // text = text.replaceAll("world war II","second world war")
// // console.log(text);



// let text =
//   "world war II changed history in many countries, and many nations were involved during world war II. People remember world war II for its global impact, as technology advanced rapidly because of world war II. Families were deeply affected by world war II, and lessons were learned from the events of world war II. Books and films often focus on world war II, and today, students still study world war II in school.";

//   text = text.replaceAll("world war II", "WORLD WAR 3")

//   console.log(text)

// let text = "I have a cat and that cat is cute";

// for (let i = 0; i < text.length; i++) {

//   const oldWord = "cat";
//   const newWord = "dog";

//   const oldWordLength = oldWord.length;

//   const startIndex = text.indexOf(oldWord);

//   if (startIndex !== -1) {

//     const endIndex = startIndex + oldWordLength - 1;

//     const before = text.slice(0, startIndex);
//     const after = text.slice(endIndex + 1);

//     text = before + newWord + after;
//   }
// }

// console.log(text);

let text = "I have a cat that cat is cute";

for (let i = 0; i < text.length; i++) {
  const oldWord = "cat";
  const newWord = "dog"
  const oldWordLength = oldWord.length;
  const startIndex = text.indexOf(oldWord);

  if (startIndex !== -1) {

    const endIndex = startIndex + oldWordLength - 1;

    const before = text.slice(0, startIndex);
    const after = text.slice(endIndex + 1);

    text = before + newWord + after;
  }
}
console.log(text)