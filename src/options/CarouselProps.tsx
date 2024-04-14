import { ArrowProps } from "../Interfaces/Interfaces";

export const NextArrow = ({ className, style, onClick }: ArrowProps) => {
	return (
		<div
			className={className}
			style={{ ...style,zIndex:"100", display: "block", position: "fixed", right: "6rem" }}
			onClick={onClick}
		/>
	);
}

export const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
	return (
		<div
			className={className}
			style={{ ...style,zIndex:"100", position: "fixed", left: "2rem", display: "block" }}
			onClick={onClick}
		/>
	);
}