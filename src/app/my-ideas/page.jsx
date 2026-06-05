import MyIdeasContent from "@/components/MyIdeasContent";

const MyIdeasPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          My Ideas
        </h1>

        <p className="text-default-500 mt-2">
          Manage and review all ideas you have shared
          with the community.
        </p>
      </div>

      <MyIdeasContent />
    </section>
  );
};

export default MyIdeasPage;