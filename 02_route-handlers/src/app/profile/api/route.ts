import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
     const requestHeaders = new Headers(request.headers);
     const headerList = headers();
     console.log(requestHeaders.get("Authorization"))
     console.log(headerList.get("Authorization"))
     return new Response("<h1>Profile API Data!</h1>", {
          headers: {
               "Content-type": "text/html"
          }
     })
}
