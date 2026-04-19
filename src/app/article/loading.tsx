const SkeletonArticle = () => (
  <div className="animate-pulse bg-white rounded-3xl border border-slate-100 overflow-hidden p-8">
    <div className="h-48 bg-slate-100 rounded-2xl mb-6 -mx-8 -mt-8" />
    <div className="h-6 bg-slate-100 rounded-full w-3/4 mb-3" />
    <div className="h-4 bg-slate-100 rounded-full w-full mb-2" />
    <div className="h-4 bg-slate-100 rounded-full w-5/6 mb-6" />
    <div className="h-4 bg-slate-100 rounded-full w-20" />
  </div>
);

export default function ArticleLoading() {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <div className="animate-pulse h-10 bg-slate-100 rounded-full w-56 mb-4" />
          <div className="animate-pulse h-5 bg-slate-100 rounded-full w-80" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonArticle key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
