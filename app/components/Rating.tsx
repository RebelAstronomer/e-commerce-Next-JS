interface RatingProps {
  rating: number;
}

// TODO: Make work dynamically
export default function Rating({ rating }: RatingProps) {
  return (
    <div className="items-center space-x-2 flex">
      <div className="rating rating-sm rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-primary cursor-default"
          defaultChecked
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-primary cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-primary cursor-default"
          disabled
        />
      </div>
      <p className="font-semibold text-md">{rating}</p>
    </div>
  );
}
