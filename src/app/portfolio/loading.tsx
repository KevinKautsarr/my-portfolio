const SkeletonCard = () => (
  <div className="animate-pulse bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden">
    <div className="aspect-[16/10] bg-slate-100" />
    <div className="p-10 space-y-4">
      <div className="h-6 bg-slate-100 rounded-full w-3/4" />
      <div className="h-4 bg-slate-100 rounded-full w-full" />
      <div className="h-4 bg-slate-100 rounded-full w-5/6" />
      <div className="flex gap-2 pt-2">
        <div className="h-6 bg-slate-100 rounded-full w-16" />
        <div className="h-6 bg-slate-100 rounded-full w-20" />
        <div className="h-6 bg-slate-100 rounded-full w-14" />
      </div>
    </div>
  </div>
);

export default function PortfolioLoading() {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <div className="animate-pulse h-10 bg-slate-100 rounded-full w-64 mb-4" />
          <div className="animate-pulse h-5 bg-slate-100 rounded-full w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
