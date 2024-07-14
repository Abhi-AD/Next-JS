import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
     return (
          <>
               <Card>
                    <div>ArchivedNotification</div>
                    <Link href={`/complex-dashboard`}>Default</Link>
               </Card>
          </>
     )
}