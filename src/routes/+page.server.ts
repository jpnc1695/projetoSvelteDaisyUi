import { redirect } from '@sveltejs/kit';
import type { PageServerLoad  } from './$types';


export const config = {
    runtime: "nodejs18.x",
  };


export const load:PageServerLoad  = async (event) => {
    // get the sessionId from the cookie
    const token = event.cookies.get("auth_token");  
    // if there is a token, redirect to the user page
    if (!token) {
      throw redirect(301, "/login");
    }
  };

