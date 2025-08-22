import { Skeleton } from "@/components/ui/skeleton";

export function UserSkeleton() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
    </div>
  );
}