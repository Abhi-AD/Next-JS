import React from 'react';
export default function ReviewDetail({ params }: {
     params: {
          productId: string;
          reviewId: string;
     }
}) {
     return (
          <>
               <h2>Reviews {params.reviewId} for {params.productId}</h2>
          </>
     )
}