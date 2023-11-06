import "./ComingSoon.scss";

function ComingSoon() {
	const placeHolder = "jean.dupont@adresse-mail.fr";

	return (
		<>
			<main className="container">
				<div className="leftPartContainer">
					<h1 className="title">{}</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci aspernatur sint ex, voluptatem tempore magnam quasi dolores neque quidem illum at, recusandae eveniet rem
						expedita ipsum ipsa laboriosam cum.
					</p>
				</div>
				<div className="rightPartContainer"></div>
				<div className="bottomPartContainer">
					<form className="newsletterForm">
						<label htmlFor="emailNewsletter">Renseigner une adresse mail pour être tenu au courant de la sortie de l'application</label>
						<input type="text" name="emailNewsletter" id="emailNewsletter" placeholder={placeHolder}></input>
						<button type="submit">Envoyer</button>
					</form>
				</div>
			</main>
		</>
	);
}

export default ComingSoon;
