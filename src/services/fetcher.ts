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

export async function fetchDatas() {
	try {
		const objRequest: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};
		const response = await fetch("https://cinehub-dev-backend.codevert.org/cinemas", objRequest);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

export async function fetchAccessibilities() {
	try {
		const objRequest: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};
		const response = await fetch("https://cinehub-dev-backend.codevert.org/accessibilities", objRequest);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}