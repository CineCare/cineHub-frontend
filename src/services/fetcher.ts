export async function postEmailFetch(body:string, authToken: string) {
  try {
    const req = await fetch("http://localhost:1337/api/newsletter-lists", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept-Language": "fr-FR",
				Authorization: `Bearer ${authToken}`, // Ajoutez votre token ici
			},
			body: JSON.stringify({ data: { email: body } }),
		});
    return await req.json();
  } catch (err) {
    console.error("erreur :", err);
  }
}