import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectSkeleton() {
  return (
    <Card className="size-full max-w-md shadow-lg">
      <CardHeader>
        <Skeleton className="w-full h-[200px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-4" />
        <Skeleton className="h-4 w-20" />
      </CardContent>
    </Card>
  );
}