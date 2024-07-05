export default function ProductDetails({ params }: { params: { productId: string }; }) {
     return (
          <>
               <h1>Details {params.productId} Product Details Page</h1>
          </>
     )
}