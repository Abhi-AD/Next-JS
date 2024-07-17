import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
     const requestHeaders = new Headers(request.headers);
     const headerList = headers();
     cookies().set("resultPerPage", "20")
     const theme = request.cookies.get("theme");
     console.log(requestHeaders.get("Authorization"))
     console.log(headerList.get("Authorization"))
     console.log(theme)
     console.log(cookies().get("resultPerPage"));
     cookies()
     return new Response("<h1>Profile API Data!</h1>", {
          headers: {
               "Content-type": "text/html",
               "Set-cookie": "theme=dark",
          }
     })
}
