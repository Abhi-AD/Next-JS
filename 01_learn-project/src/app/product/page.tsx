import Link from "next/link"
export default function Product() {
     const productId = 100
     return (
          <>
               <Link href={`/`}>Home</Link>
               <h1>My Product!</h1>
               <p><Link href={`product/1`}>Project 1</Link></p>
               <p><Link href={`product/2`}>Project 2</Link></p>
               <p><Link href={`product/3`}>Project 3</Link></p>
               <p><Link href={`product/${productId}`} replace>Project {productId}</Link></p>
          </>
     )
}