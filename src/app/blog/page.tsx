import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Narendra Kumar Jha",
  description: "Thoughts and articles on Unity XR, multiplayer game development, and Web3 integration. Coming soon!",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center relative">
      <div className="mx-auto w-full max-w-md text-center space-y-6">
        {/* Back Button */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex justify-start">
            <Button asChild variant="ghost" size="sm" className="gap-1.5 rounded-lg text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </BlurFade>

        {/* Coming Soon Glassmorphic Card */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="border border-border/80 bg-card/60 backdrop-blur-sm p-10 rounded-2xl shadow-xl ring-2 ring-muted/10 space-y-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-inner">
              <BookOpen className="h-8 w-8" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Writing & Thoughts</h1>
              <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                Coming Soon
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I am currently drafting articles about Unity XR, multiplayer game architecture, dedicated Linux server hosting, and Web3 integrations. Stay tuned for deeper insights!
            </p>

            <div className="pt-2">
              <Button asChild className="w-full gap-2 rounded-xl" size="lg">
                <Link href="/">
                  Return to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
