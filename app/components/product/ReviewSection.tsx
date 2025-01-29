import Rating from "../Rating";

interface ReviewSectionProps {
  reviews: [
    {
      rating: number;
      comment: string;
      date: Date;
      reviewerName: string;
      reviewerEmail: string;
    },
  ];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="space-y-4">
      <h4 className="font-bold text-xl">Opinições sobre o produto</h4>
      <div className="bg-neutral-100 p-2 rounded-lg w-full flex flex-col gap-4">
        {reviews.map((review) => (
          <div key={review.reviewerName} className="bg-white rounded-md p-2">
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="font-semibold text-md">{review.reviewerName}</h5>
              <Rating rating={review.rating} />
            </div>
            <div>{review.comment}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
