import { Card, CardContent, Skeleton } from '@mui/material';

export default function SkeletonCard() {
  return (
    <Card className="bg-violet-100 rounded overflow-hidden shadow-md/20 w-75 h-115">
      <Skeleton variant="rectangular" className="w-full h-72" />
      <CardContent className="p-3 flex flex-col gap-1 text-sm text-center">
        <Skeleton width="80%" />
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </CardContent>
    </Card>
  );
}
