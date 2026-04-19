export default function AboutLoading() {
  return (
    <main className="relative bg-white py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-10 bg-slate-100 rounded-full w-48" />
              <div className="h-6 bg-slate-100 rounded-full w-72" />
              <div className="h-5 bg-slate-100 rounded-full w-full" />
              <div className="h-5 bg-slate-100 rounded-full w-5/6" />
            </div>
            <div className="h-16 bg-slate-100 rounded-2xl w-80" />
            <div className="grid grid-cols-2 gap-2 w-80">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-9 bg-slate-100 rounded-lg" />
              ))}
            </div>
          </div>
          <div className="animate-pulse">
            <div className="aspect-[3/4] bg-slate-100 rounded-3xl max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
