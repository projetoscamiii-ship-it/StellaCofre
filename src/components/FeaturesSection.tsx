import { FeatureCard } from "./FeatureCard";
import { 
  PiggyBank, 
  ArrowLeftRight, 
  Lock, 
  BookOpen, 
  Fingerprint, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "Caixinhas Inteligentes",
    description: "Crie metas personalizadas para cada objetivo: viagem, emergência, educação. Visualize seu progresso e comemore cada conquista.",
  },
  {
    icon: ArrowLeftRight,
    title: "Conversão Instantânea",
    description: "Transforme seus reais em USDC ou XLM com um toque. Proteja seu dinheiro da inflação e aproveite as melhores taxas.",
  },
  {
    icon: Lock,
    title: "Trava de Proteção",
    description: "Congele seus valores até uma data específica. Evite gastos impulsivos e garanta que suas metas sejam alcançadas.",
  },
  {
    icon: BookOpen,
    title: "Educação Financeira",
    description: "Aprenda sobre DeFi e finanças com pílulas de conhecimento personalizadas. Cresça seu dinheiro e seu conhecimento.",
  },
  {
    icon: Fingerprint,
    title: "Acesso Simplificado",
    description: "Login por e-mail ou biometria. Sem precisar decorar 24 palavras. Segurança de blockchain com a simplicidade que você merece.",
  },
  {
    icon: Sparkles,
    title: "Rendimentos Automáticos",
    description: "Seus valores trabalham por você 24/7. Contratos inteligentes na Stellar garantem rendimentos transparentes.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Funcionalidades
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que você precisa para{" "}
            <span className="text-gradient">conquistar seus sonhos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O StellaCofre combina o poder da tecnologia blockchain com uma experiência 
            pensada especialmente para você.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
