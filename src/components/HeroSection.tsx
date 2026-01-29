import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { SavingsBox } from "./SavingsBox";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl animate-fade-in">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              <Shield className="h-4 w-4" />
              Powered by Stellar Network
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Sua autonomia financeira{" "}
              <span className="text-gradient">começa aqui</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              O StellaCofre é a carteira digital que transforma seus sonhos em metas alcançáveis. 
              Crie suas "caixinhas", proteja-se da inflação com USDC e tenha o controle total do seu dinheiro.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Criar Minha Conta
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-accent" />
                Transações em segundos
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-secondary" />
                Taxas quase zero
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                100% seguro
              </div>
            </div>
          </div>

          {/* Right content - Caixinhas preview */}
          <div className="relative lg:pl-8">
            {/* Floating decorations */}
            <div className="absolute -top-4 right-0 h-24 w-24 rounded-2xl gradient-hero opacity-20 blur-xl animate-float" />
            <div className="absolute bottom-10 -left-4 h-32 w-32 rounded-full gradient-teal opacity-20 blur-xl animate-float-delayed" />

            {/* Cards grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <SavingsBox
                title="Viagem dos Sonhos"
                amount="R$ 3.450,00"
                goal="R$ 8.000,00"
                progress={43}
                variant="travel"
                className="animate-fade-in sm:translate-y-8"
              />
              <SavingsBox
                title="Reserva de Emergência"
                amount="R$ 12.800,00"
                goal="R$ 15.000,00"
                progress={85}
                variant="emergency"
                locked
                className="animate-fade-in [animation-delay:200ms]"
              />
              <SavingsBox
                title="Educação"
                amount="R$ 5.200,00"
                goal="R$ 20.000,00"
                progress={26}
                variant="education"
                className="animate-fade-in [animation-delay:400ms]"
              />
              <SavingsBox
                title="Meu Sonho"
                amount="R$ 1.850,00"
                goal="R$ 5.000,00"
                progress={37}
                variant="dream"
                className="animate-fade-in [animation-delay:600ms] sm:translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
