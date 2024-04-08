import React, { useState } from "react";
import "./ModalWindow.scss";
import ConversationHandler from "../ConversationHandler/ConversationHandler";

interface ModalProps {
  visible: boolean;
}

const ModalWindow: React.FC<ModalProps> = (props) => {
  const [questionsAndResponses, setQuestionsAndResponses] = useState<
    Array<{ question: string; response: JSX.Element | string }>
  >([]);

  const handleQuestionSubmit = (question: string) => {
    const response = <ConversationHandler question={question} />;
    setQuestionsAndResponses([
      ...questionsAndResponses,
      { question: question, response: response },
    ]);
  };

  return (
    <div
      style={{
        opacity: props.visible ? "1" : "0",
      }}
      className="modalWindow"
    >
      <h4>Votre Assistant Virtuel</h4>
      <div className="question-response-container">
        {questionsAndResponses.map((item, index) => (
          <div key={index} className="question-response">
            <div className="question">
              <strong>Vous</strong> {item.question}
            </div>
            <div className="response">
              <strong>Assistant</strong> {item.response}
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const question = formData.get("question") as string;
            if (question.trim() !== "") {
              handleQuestionSubmit(question);
            }
          }}
        >
          <input
            type="text"
            name="question"
            placeholder="Posez votre question..."
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
