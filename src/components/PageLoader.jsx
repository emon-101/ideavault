import { Lightbulb } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <Lightbulb
          size={60}
          className="text-cyan-500"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold">
        IdeaVault
      </h2>

      <p className="text-default-500 mt-2">
        Loading amazing ideas...
      </p>
    </div>
  );
}