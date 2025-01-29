import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#998" highlightColor="#550">
      {" "}
      Carregando...
      <Skeleton
        style={{ borderRadius: 10 }}
        count={9}
        height={10}
        width={40}
        duration={20}
      />
    </SkeletonTheme>
  );
}
