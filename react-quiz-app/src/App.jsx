// import react from "react"
// import { useState } from "react";

// function App(){

//   const [score, setScore] = useState(0);
//   const [answered,setAnswered] = useState(false)
//  const [currentQuestion, setCurrentQuestion] = useState(0);
//  const [showResult, setShowResult] = useState(false);
//   const questions = [
//     {
//       question: "Islam ka pehla rukn kya hai?",
//       options: [
//         "Namaz",
//         "Roza",
//         "Kalma",
//         "Zakat"
//       ],
//       correct: "Kalma"
//     },
    
//     {
//     question: "Quran Majeed kis zabaan mein nazil hua?",
//     options: [
//       "Urdu",
//       "Arabic",
//       "Persian",
//       "English"
//     ],
//     correct: "Arabic"
//   },
  
//   {
//     question: "Musalman din mein kitni farz namazen parhte hain?",
//     options: [
//       "3",
//       "4",
//       "5",
//       "6"
//     ],
//     correct: "5"
//   },
  
//   {
//     question: "Ramzan ke rozon ka maqsad kya hai?",
//     options: [
//       "Taqwa",
//       "Khel",
//       "Safar",
//       "Tijarat"
//     ],
//     correct: "Taqwa"
//   },

//   {
//     question: "Hajj kis shehar mein ada kiya jata hai?",
//     options: [
//       "Madina",
//       "Karachi",
//       "Makkah",
//       "Lahore"
//     ],
//     correct: "Makkah"
//   }
// ];



// const question = questions[currentQuestion]

// function handleOption(option) {
//   if (answered) return;

//   setAnswered(true);

//   if (option === question.correct) {
//     setScore(score + 1);
//   }
// }

// function handleNext() {
//   const lastQuestion = currentQuestion === questions.length - 1;

//   if (lastQuestion) {
//     setShowResult(true);
//     return;
//   }

//   setCurrentQuestion(currentQuestion + 1);
//   setAnswered(false);
// }
//   setCurrentQuestion(currentQuestion + 1)
//   setAnswered(false)

//     function restartQuiz() {
//   setScore(0);
//   setCurrentQuestion(0);
//   setAnswered(false);
//   setShowResult(false);
// }
    
    
    
//     const percentage = (score/questions.length) * 100;
//     const result = percentage>= 50 ? "pass ✔" : "FAIL ❌"
    
//      if (showResult) {
//   const percentage = (score / questions.length) * 100;
//   const result = percentage >= 50 ? "PASS ✔" : "FAIL ❌";

//   return (
//     <div>
//       <h1>Test Completed 🎉</h1>
//       <h2>Score: {score}</h2>
//       <h2>Percentage: {percentage}%</h2>
//       <h2>Result: {result}</h2>

//       <button onClick={restartQuiz}>
//         Restart Quiz
//       </button>
//     </div>
//   );
// }
    
  
// }
// return (
//   <div>
//     <h2>{question.question}</h2>

//     {question.options.map((option, index) => (
//       <button
//         key={index}
//         onClick={() => handleOption(option)}
//         disabled={answered}
//       >
//         {option}
//       </button>
//     ))}

//     <br />

//     <button onClick={handleNext}>
//       Next ⏭️
//     </button>

//     <h3>Score: {score}</h3>
//   </div>
// );
// }
// export default App 

import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

 const questions = [
  {
    question: "Islam ka pehla kalma kya hai?",
    options: ["Kalma Tayyaba", "Kalma Shahadat", "Kalma Tamjeed", "Kalma Tawheed"],
    correct: "Kalma Tayyaba"
  },
  {
    question: "Quran Majeed kitni saalon mein nazil hua?",
    options: ["20 saal", "23 saal", "25 saal", "30 saal"],
    correct: "23 saal"
  },
  {
    question: "Namaz kitni farz hai?",
    options: ["3", "4", "5", "6"],
    correct: "5"
  },
  {
    question: "Roza kis mahine mein rakha jata hai?",
    options: ["Muharram", "Rajab", "Ramzan", "Shawwal"],
    correct: "Ramzan"
  },
  {
    question: "Hajj kis shehar mein hota hai?",
    options: ["Madina", "Makkah", "Karachi", "Dubai"],
    correct: "Makkah"
  },
  {
    question: "Quran kitni suraton par mushtamil hai?",
    options: ["112", "113", "114", "115"],
    correct: "114"
  },
  {
    question: "Islam ke kitne arkaan hain?",
    options: ["3", "4", "5", "6"],
    correct: "5"
  },
  {
    question: "Zakat kis par farz hai?",
    options: ["Har Musalman", "Sirf Ameer", "Sirf Ghareeb", "Bachon par"],
    correct: "Sirf Ameer"
  },
  {
    question: "Namaz ka rukh kis taraf hota hai?",
    options: ["Madina", "Makkah", "Jerusalem", "India"],
    correct: "Makkah"
  },
  {
    question: "Ramzan ke baad ka eid ka naam kya hai?",
    options: ["Eid ul Adha", "Eid ul Fitr", "Eid Milad", "Shab e Barat"],
    correct: "Eid ul Fitr"
  },
  {
    question: "Islam ka paighambar kaun hai?",
    options: ["Hazrat Musa (A.S)", "Hazrat Isa (A.S)", "Hazrat Muhammad (S.A.W)", "Hazrat Ibrahim (A.S)"],
    correct: "Hazrat Muhammad (S.A.W)"
  },
  {
    question: "Wazu mein kitne farz hain?",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "Quran ka pehla lafz kya hai?",
    options: ["Bismillah", "Iqra", "Alhamdulillah", "Allahu Akbar"],
    correct: "Iqra"
  },
  {
    question: "Jannat aur Jahannam par imaan kis rukn mein aata hai?",
    options: ["Iman bil Kutub", "Iman bil Akhirat", "Iman bil Rasool", "Iman bil Allah"],
    correct: "Iman bil Akhirat"
  },
  {
    question: "Sab se pehla Nabi kaun hain?",
    options: ["Hazrat Adam (A.S)", "Hazrat Nuh (A.S)", "Hazrat Ibrahim (A.S)", "Hazrat Musa (A.S)"],
    correct: "Hazrat Adam (A.S)"
  },
  {
    question: "Islam mein din kitne farz hain?",
    options: ["3", "4", "5", "6"],
    correct: "5"
  },
  {
    question: "Masjid ka matlab kya hota hai?",
    options: ["Ghar", "Ibadat ka ghar", "School", "Market"],
    correct: "Ibadat ka ghar"
  },
  {
    question: "Quran ka sab se chhota surah ka naam?",
    options: ["Al-Kawthar", "Al-Ikhlas", "Al-Falaq", "An-Nas"],
    correct: "Al-Kawthar"
  },
  {
    question: "Islam mein sab se pehla shehar kaunsa hai jahan Islam phaila?",
    options: ["Madina", "Makkah", "Taif", "Baghdad"],
    correct: "Makkah"
  },
  {
    question: "Hazrat Muhammad (S.A.W) ki wafat kis shehar mein hui?",
    options: ["Makkah", "Madina", "Taif", "Jerusalem"],
    correct: "Madina"
  }
];

  const question = questions[currentQuestion];

  function handleOption(option) {
    if (answered) return;

    setAnswered(true);

    if (option === question.correct) {
      setScore(score + 1);
    }
  }

  function handleNext() {
    const lastQuestion = currentQuestion === questions.length - 1;

    if (lastQuestion) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
  }

  function restartQuiz() {
    setScore(0);
    setCurrentQuestion(0);
    setAnswered(false);
    setShowResult(false);
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const result = percentage >= 50 ? "PASS ✔" : "FAIL ❌";

    return (
      <div>
        <h1>Test Completed 🎉</h1>
        <h2>Score: {score}</h2>
        <h2>Percentage: {percentage}%</h2>
        <h2>Result: {result}</h2>

        <button onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOption(option)}
          disabled={answered}
        >
          {option}
        </button>
      ))}

      <br />

      <button onClick={handleNext}>
        Next ⏭️
      </button>

      <h3>Score: {score}</h3>
    </div>
  );
}

export default App;