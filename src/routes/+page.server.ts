// import { redirect } from "@sveltejs/kit";
// import type { PageServerLoad } from "./$types";
// import { parse } from "cookie";
// import { validateSession } from "$server/auth";

// export const load: PageServerLoad = async ({ request }) => {
//   try {
//     // get the sessionId from the cookie
//     const cookies = parse(request.headers.get("cookie") || "");
//     const token = cookies.auth_token;

//     if (!token) {
//       throw redirect(302, "/login");
//     }

//     const session = await validateSession(token);

//     return{
//       userId: session.userId
//     }

//   } catch (error) {
//     console.error("Erro na validação da sessão:", error);
//     throw redirect(302, "/login");
//   }
// };
