import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export function CTASection() {
  const { openSignup } = useAuth();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorations */}
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-white/5 blur-2xl" />

      <div className="container relative mx-auto px-4 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <Sparkles className="h-8 w-8 text-primary-foreground" />
        </div>

        {/* Headline */}
        <h2 className="mx-auto mb-6 max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          Comece hoje a construir o futuro que você merece
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/80">
          Junte-se a milhares de mulheres que já descobriram o poder de ter o controle 
          total das suas finanças.
        </p>

        {/* CTA Button */}
        <Button 
          size="xl" 
          className="bg-white text-primary hover:bg-white/90 shadow-elevated hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          onClick={openSignup}
        >
          Criar Minha Conta Grátis
          <ArrowRight className="h-5 w-5" />
        </Button>

        {/* Trust text */}
        <p className="mt-6 text-sm text-primary-foreground/60">
          ✨ Conta 100% gratuita • Sem taxas de manutenção • Cancele quando quiser
        </p>
      </div>
    </section>
  );
}
