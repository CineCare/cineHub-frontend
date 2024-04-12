import React from "react";
import "./ConversationHandler.scss";
import CinemaList from "../../fetcher";

interface ConversationHandlerProps {
  question: string;
}

const ConversationHandler: React.FC<ConversationHandlerProps> = ({
  question,
}) => {
  const conversation = (question: string) => {
    const lowercaseQuestion = question.toLowerCase();

    if (
      lowercaseQuestion.includes("cinéma") ||
      lowercaseQuestion.includes("accessible") ||
      lowercaseQuestion.includes("sourd")
    ) {
      return <CinemaList />;
    } else if (
      lowercaseQuestion.includes("bonjour") ||
      lowercaseQuestion.includes("Salut") ||
      lowercaseQuestion.includes("Hello")
    ) {
      return (
        <div>
          <p>Bonjour ! En Quoi puis-je vous aider aujourd'hui ?</p>
        </div>
      );
    } else {
      return "Désolé, je ne comprends pas la question ou je n'ai pas trouvé de cinémas correspondants.";
    }
  };

  return conversation(question);
};

export default ConversationHandler;
