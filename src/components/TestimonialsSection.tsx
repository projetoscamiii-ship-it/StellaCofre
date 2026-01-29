import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empreendedora",
    content: "Finalmente consegui separar o dinheiro do meu negócio do pessoal. As caixinhas são perfeitas para isso!",
    avatar: "M",
    color: "bg-primary",
  },
  {
    name: "Juliana Costa",
    role: "Designer",
    content: "Nunca imaginei que guardar dinheiro poderia ser tão fácil e até divertido. Já realizei minha primeira meta de viagem!",
    avatar: "J",
    color: "bg-secondary",
  },
  {
    name: "Fernanda Oliveira",
    role: "Professora",
    content: "A proteção contra inflação com USDC faz toda diferença. Meu dinheiro não perde valor enquanto eu junto para meus objetivos.",
    avatar: "F",
    color: "bg-box-dream",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-foreground">
            Depoimentos
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Mulheres que já{" "}
            <span className="text-gradient">transformaram suas vidas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de quem descobriu o poder da autonomia financeira.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-primary-foreground",
                    testimonial.color
                  )}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
