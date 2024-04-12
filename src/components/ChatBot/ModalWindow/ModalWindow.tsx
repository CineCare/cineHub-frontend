import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import ConversationHandler from "../ConversationHandler/ConversationHandler";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalWindow: React.FC<ModalProps> = ({ visible, onClose }) => {
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
    <Dialog
      open={visible}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title">Votre Assistant Virtuel</DialogTitle>
      <DialogContent>
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
            <TextField
              autoFocus
              margin="dense"
              id="question"
              name="question"
              label="Posez votre question..."
              type="text"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Envoyer
            </Button>
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          color="primary"
        >
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
