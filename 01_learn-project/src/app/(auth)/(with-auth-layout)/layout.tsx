import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
     return (
          <>
               <div>
                    <h2>Inner layout</h2>
                    {children}
               </div>
          </>
     )
}