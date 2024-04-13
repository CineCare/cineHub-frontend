import { positionMockup } from "../mockups/movieTheatersMockup";
/**
 * La fonction récupère les données du type passé en paramètre d'une URL spécifiée et les renvoie au format JSON.
 * @returns La fonction `fetchDatas` renvoie les données JSON récupérées à partir du point de
 * terminaison "https://cinehub-dev-backend.codevert.org/type".
 */
export async function fetchDatas(type: string, position?: string) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const positionFetch = `${positionMockup.lat},${positionMockup.lng}`;
	try {
		const objRequest: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};
		let response;
		if (position) response = await fetch(`https://cinehub-dev-backend.codevert.org/${type}?position=${position}`, objRequest);
		else response = await fetch(`https://cinehub-dev-backend.codevert.org/${type}?position=${positionFetch}`, objRequest);
		return await response.json();
	} catch (error) {
		throw new Error();
	}
}
