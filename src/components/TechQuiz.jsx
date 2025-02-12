import React, { useState } from 'react';

const TechQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const questions = [
    {
      question: "O que é um navegador de internet?",
      options: ["Um aplicativo de mensagens", "Um programa para acessar a internet", "Um antivírus", "Um sistema operacional"],
      correct: 1
    },
    {
      question: "O que é um e-mail?",
      options: ["Um tipo de vírus", "Uma correspondência digital", "Um navegador de internet", "Um aplicativo de jogos"],
      correct: 1
    },
    {
      question: "O que é um smartphone?",
      options: [
        "Um computador de mesa",
        "Um telefone inteligente com múltiplas funcionalidades",
        "Um tipo de tablet",
        "Uma marca de navegador"
      ],
      correct: 1
    },
    {
      question: "O que é download?",
      options: [
        "Enviar arquivos para a internet",
        "Baixar arquivos da internet",
        "Conectar-se ao Wi-Fi",
        "Fazer backup"
      ],
      correct: 1
    },
    {
      question: "O que é a Internet?",
      options: [
        "Um aplicativo de mensagens",
        "Um tipo de computador",
        "A rede mundial de computadores",
        "Um sistema operacional"
      ],
      correct: 2
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, {
        question: questions[currentQuestion].question,
        correctAnswer: questions[currentQuestion].options[questions[currentQuestion].correct]
      }]);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setWrongAnswers([]);
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <h2>Resultados do Quiz</h2>
        <p>Sua pontuação: {score} de {questions.length}</p>
        <p>Porcentagem de acerto: {((score / questions.length) * 100).toFixed(1)}%</p>
        
        {wrongAnswers.length > 0 && (
          <div className="wrong-answers">
            <h3>Revisão das questões erradas:</h3>
            {wrongAnswers.map((item, index) => (
              <div key={index} className="wrong-answer">
                <p>{item.question}</p>
                <p className="correct">Resposta correta: {item.correctAnswer}</p>
              </div>
            ))}
          </div>
        )}
        
        <button onClick={resetQuiz}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Quiz de Tecnologia</h2>
      <p>Questão {currentQuestion + 1} de {questions.length}</p>
      
      <div className="question">
        <h3>{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <p>Pontuação atual: {score}</p>
    </div>
  );
};

export default TechQuiz;
