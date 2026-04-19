export default function ContactLoading() {
  return (
    <main className="min-h-screen pt-12 pb-20 bg-white flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start animate-pulse">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="h-12 bg-slate-100 rounded-full w-56" />
              <div className="h-5 bg-slate-100 rounded-full w-full" />
              <div className="h-5 bg-slate-100 rounded-full w-4/5" />
            </div>
            <div className="space-y-6">
              <div className="h-16 bg-slate-100 rounded-2xl" />
              <div className="h-16 bg-slate-100 rounded-2xl" />
            </div>
            <div className="flex gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-14 w-14 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 space-y-4">
            <div className="h-12 bg-slate-100 rounded-2xl" />
            <div className="h-12 bg-slate-100 rounded-2xl" />
            <div className="h-40 bg-slate-100 rounded-2xl" />
            <div className="h-14 bg-slate-100 rounded-3xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
