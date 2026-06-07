import MyInteractionsContent from "@/components/MyInteractionsContent";

export const metadata = {
  title: "IdeaVault | My Interactions",
  description: "Developed By Emon Hossain",
};


const MyInteractionsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">
        My Interactions
      </h1>

      <MyInteractionsContent />
    </section>
  );
};

export default MyInteractionsPage;