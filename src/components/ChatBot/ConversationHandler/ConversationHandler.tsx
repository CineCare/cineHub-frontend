import React, { useState, useEffect } from "react";
import "./ConversationHandler.scss";
import CinemaList from "../../fetcher";

interface ConversationHandlerProps {
  question: string;
}

const ConversationHandler: React.FC<ConversationHandlerProps> = ({ question }) => {
  const [response, setResponse] = useState<JSX.Element | string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setResponse(handleQuestion(question));
      setLoading(false);
    }, getTimeout(question));

    return () => clearTimeout(timer);
  }, [question]);

  const handleQuestion = (question: string) => {
    const lowercaseQuestion = question.toLowerCase();

    if (lowercaseQuestion.includes("cinéma") || lowercaseQuestion.includes("cinema") || lowercaseQuestion.includes("accessible") || lowercaseQuestion.includes("fauteuil")) {
      return (
        <div>
          <p>Bien sûr, voici la liste des cinémas possédant un dispositif convenant aux personnes en fauteuil</p>
          <CinemaList />
        </div>
      );
    } else if (lowercaseQuestion.includes("bonjour") || lowercaseQuestion.includes("salut") || lowercaseQuestion.includes("hello")) {
      return (
        <div>
          <p>Bonjour ! En quoi puis-je vous aider aujourd'hui ?</p>
        </div>
      );
    } else {
      return "Désolé, je ne comprends pas la question ou je n'ai pas trouvé de cinémas correspondants.";
    }
  };

  const getTimeout = (question: string) => {
    // Modifier les délais en fonction de la réponse souhaitée
    if (question.toLowerCase().includes("cinéma") || question.toLowerCase().includes("cinema")) {
      return 4000; // 4 secondes
    } else {
      return 2000; // 2 secondes par défaut
    }
  };

  return (
    <div className="conversation-handler">
      <div className="response">
        {loading && <div className="loader">...</div>}
        {response}
      </div>
    </div>
  );
};

export default ConversationHandler;

