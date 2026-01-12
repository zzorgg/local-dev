export default function ContentSkeleton() {
    return (
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 animate-pulse">
            {/* Section Cards Skeleton */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-xl bg-muted h-24"></div>
                ))}
            </div>
            
            {/* Chart Skeleton */}
            <div className="px-4 lg:px-6">
                <div className="rounded-xl bg-muted h-80"></div>
            </div>
            
            {/* Table Skeleton */}
            <div className="px-4 lg:px-6">
                <div className="rounded-xl bg-muted h-96"></div>
            </div>
        </div>
    )
}