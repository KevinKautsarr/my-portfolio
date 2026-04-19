const SkeletonSkillCard = () => (
  <div className="animate-pulse p-8 bg-white rounded-3xl border border-slate-100">
    <div className="h-4 bg-slate-100 rounded-full w-24 mb-8" />
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-9 bg-slate-100 rounded-lg" />
      ))}
    </div>
  </div>
);

export default function SkillsLoading() {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="animate-pulse h-9 bg-slate-100 rounded-full w-56 mx-auto mb-4" />
          <div className="animate-pulse h-5 bg-slate-100 rounded-full w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonSkillCard key={i} />
          ))}
        </div>
        <div className="mt-8 flex gap-8 justify-center">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="w-full max-w-xs">
              <SkeletonSkillCard />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
