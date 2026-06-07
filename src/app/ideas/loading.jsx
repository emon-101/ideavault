export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="h-10 w-48 bg-default-200 rounded animate-pulse mb-8" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="rounded-3xl border p-5 space-y-4"
          >
            <div className="h-48 rounded-2xl bg-default-200 animate-pulse" />

            <div className="h-6 bg-default-200 rounded animate-pulse" />

            <div className="h-4 bg-default-200 rounded animate-pulse" />

            <div className="h-4 w-2/3 bg-default-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}