import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, IconButton, Avatar } from "@mui/material";
import ConversationHandler from "../ConversationHandler/ConversationHandler";
import "./ModalWindow.scss";
import CloseIcon from "@mui/icons-material/Close";
import { SmartToy } from "@mui/icons-material";

interface ModalProps {
	visible: boolean;
	onClose: () => void;
}

const ModalWindow: React.FC<ModalProps> = ({ visible, onClose }) => {
	const [questionsAndResponses, setQuestionsAndResponses] = useState<Array<{ question: string; response: JSX.Element | string }>>([]);
	const [currentQuestion, setCurrentQuestion] = useState<string>("");

	const handleQuestionSubmit = (question: string) => {
		const response = <ConversationHandler question={question} />;
		setQuestionsAndResponses([...questionsAndResponses, { question: question, response: response }]);
		setCurrentQuestion("");
	};

	return (
		<Dialog
			open={visible}
			onClose={onClose}
			fullWidth
			maxWidth="lg"
			sx={{
				"& .MuiDialog-paper": {
					minHeight: "calc(100% - 68px)", // Définir la hauteur maximale à 80% de la hauteur de la vue
				},
			}}
			aria-labelledby="modal-title"
			aria-describedby="modal-description">
			<DialogTitle id="modal-title">Votre Assistant Virtuel</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
				}}>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>
				<div className="question-response-container">
					{questionsAndResponses.map((item, index) => (
						<div
							key={index}
							className="question-response">
							<div className="question">
								<Typography variant="body2" sx={{display:"flex",alignItems:"center", gap:"0.5rem"}}>
									<strong>Vous</strong>
										<Avatar alt="avatar" />
								</Typography>
								<Typography variant="body1">{item.question}</Typography>
							</div>
							<div className="response">
								<Typography variant="body2" sx={{display:"flex",alignItems:"center", gap:"0.5rem"}}>
										<SmartToy />
									<strong>Assistant</strong>
								</Typography>
								<Typography variant="body1">{item.response}</Typography>
							</div>
						</div>
					))}
				</div>
			</DialogContent>
			<DialogActions sx={{ justifyContent: "space-between" }}>
				<form
					className="searchbarAssistant"
					onSubmit={e => {
						e.preventDefault();
						const formData = new FormData(e.target as HTMLFormElement);
						const question = formData.get("question") as string;
						if (question.trim() !== "") {
							handleQuestionSubmit(question);
						}
					}}>
					<TextField
						autoFocus
						margin="dense"
						id="question"
						name="question"
						label="Posez votre question..."
						type="text"
						fullWidth
						value={currentQuestion}
						onChange={e => setCurrentQuestion(e.target.value)}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary">
						Envoyer
					</Button>
				</form>
			</DialogActions>
		</Dialog>
	);
};

export default ModalWindow;
