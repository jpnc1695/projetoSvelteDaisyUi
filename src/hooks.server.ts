import type { Handle } from '@sveltejs/kit';
import { validateSession } from "$server/auth";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('session_token');

    if (token) {
        try {
            const { userId } = await validateSession(token);
            event.locals.user = { id: userId };
        } catch (err) {
            event.cookies.delete('session_token', { path: '/' });
        }
    }

    return await resolve(event);
};