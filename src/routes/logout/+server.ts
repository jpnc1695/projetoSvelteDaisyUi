import { deleteAllUserSessions } from "$server/auth";
import {verifyAuthJWT} from "$server/jwt"
import {error, type RequestHandler} from "@sveltejs/kit"
import {parse} from "cookie";


export const POST:RequestHandler = async ({request}) => {
       try {
        const cookies = parse(request.headers.get('cookie') || "");
        const token = cookies.session_token

        if (!token) {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': 'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict'
                }
            });
        }

        const payload = await verifyAuthJWT(token)
        console.log(payload)
        await deleteAllUserSessions(payload.userId);


        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': 'session_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict'
            }
        });
       } catch (err) {
        throw error(500, 'Failed to logout');
       }
}