import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import data from "./sample_data.json";

function App() {
  const [answerState, setAnswerState] = useState("unanswered");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  function questionAnswered() {
    if (answerState === "unanswered") {
      return <p className="prompt">Click an answer above</p>;
    }
    if (
      answerState ===
      data[currentQuestionNum].question.choices[
        data[currentQuestionNum].question.correct_choice_index
      ]
    ) {
      return (
        <p className="prompt">You chose {answerState}. That is correct!</p>
      );
    } else {
      return (
        <p className="prompt">You chose {answerState}. That is incorrect.</p>
      );
    }
  }

  function nextQuestion() {
    setCurrentQuestionNum(currentQuestionNum + 1);
    setAnswerState("unanswered");
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        question={data[currentQuestionNum].question.text}
        choices={data[currentQuestionNum].question.choices}
        setAnswerState={setAnswerState}
      />
      {questionAnswered()}
      {currentQuestionNum < data.length - 1 && answerState !== "unanswered" ? (
        <NextQuestion nextQuestion={nextQuestion} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
