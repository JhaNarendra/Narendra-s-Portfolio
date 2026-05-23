import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Narendra Kumar Jha",
  description: "Professional resume of Narendra Kumar Jha, Unity XR & Multiplayer Developer. View, print, or download the PDF.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  const resumeUrl = "/Narendra_Jha_XR_Multiplayer_Engineer_Resume.pdf";

  return (
    <main className="min-h-dvh flex flex-col gap-6 relative">
      {/* Navigation Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-border/50 bg-card/50 backdrop-blur-md p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-lg" id="btn-back-home">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Home</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Resume</h1>
              <p className="text-xs text-muted-foreground">Narendra Kumar Jha</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="gap-1.5 rounded-lg" id="btn-open-pdf">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Open PDF</span>
              </a>
            </Button>
            <Button asChild variant="default" size="sm" className="gap-1.5 rounded-lg" id="btn-download-pdf">
              <a href={resumeUrl} download="Narendra_Jha_XR_Multiplayer_Engineer_Resume.pdf">
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </a>
            </Button>
          </div>
        </div>
      </BlurFade>

      {/* Main Resume Viewport */}
      <BlurFade delay={BLUR_FADE_DELAY * 2} className="flex-1 w-full">
        {/* Desktop Viewer (breaks out slightly for a wider view) */}
        <div className="hidden md:block w-[calc(100vw-3rem)] max-w-4xl relative left-1/2 -translate-x-1/2">
          <div className="border border-border/60 bg-card rounded-2xl overflow-hidden shadow-2xl ring-4 ring-muted/20">
            <div className="h-[80vh] w-full relative">
              <iframe
                src={`${resumeUrl}#toolbar=0`}
                className="w-full h-full border-none"
                title="Narendra Kumar Jha - Resume"
                id="resume-pdf-iframe"
              />
            </div>
          </div>
        </div>

        {/* Mobile Viewport Callout */}
        <div className="block md:hidden border border-border/80 bg-card/60 backdrop-blur-sm p-8 rounded-2xl text-center space-y-6 shadow-xl ring-2 ring-muted/10">
          <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-inner">
            <FileText className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight">PDF Viewer</h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Mobile browsers often limit direct PDF embedding. Click below to view the PDF in full-screen or download it.
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Button asChild size="lg" className="w-full gap-2 rounded-xl" id="btn-mobile-open">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Fullscreen
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full gap-2 rounded-xl" id="btn-mobile-download">
              <a href={resumeUrl} download="Narendra_Jha_XR_Multiplayer_Engineer_Resume.pdf">
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}
