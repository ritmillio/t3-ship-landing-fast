/** Components */
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-[300vh] flex-col items-start justify-start">
      <Button>Click me</Button>
      <ThemeToggle />
    </main>
  );
}
