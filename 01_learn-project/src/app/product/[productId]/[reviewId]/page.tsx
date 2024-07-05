import React from 'react';
export default function ReviewDetail({ params }: {
     params: {
          productId: string;
          reviewId: string;
     }
}) {
     return (
          <>
               <p>Reviews {params.reviewId} for {params.productId}</p>
          </>
     )
}