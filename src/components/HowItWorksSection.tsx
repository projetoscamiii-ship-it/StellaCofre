import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, PiggyBank, TrendingUp, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Cadastre-se em segundos usando seu e-mail ou biometria. Sem burocracia, sem complicação.",
  },
  {
    number: "02",
    icon: PiggyBank,
    title: "Crie suas caixinhas",
    description: "Defina seus objetivos e dê nomes para cada meta. Viagem? Reserva? Você decide!",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Deposite e converta",
    description: "Adicione valores em reais e converta para USDC. Seu dinheiro protegido da inflação.",
  },
  {
    number: "04",
    icon: Gift,
    title: "Realize seus sonhos",
    description: "Acompanhe seu progresso, aprenda sobre finanças e celebre cada conquista!",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Como Funciona
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comece sua jornada em{" "}
            <span className="text-gradient">4 passos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simplicidade é a nossa prioridade. Você não precisa entender de blockchain 
            para aproveitar todos os benefícios.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto max-w-4xl">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex gap-6 lg:gap-12"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card shadow-card group-hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                    <Icon className="h-7 w-7 text-primary" />
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full gradient-hero text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="xl">
            Começar Agora - É Grátis
            <ArrowRight className="h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Sem taxas escondidas • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
