import { Sparkles, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Stella<span className="text-primary">Cofre</span>
              </span>
            </a>
            <p className="mb-6 text-sm text-background/60 leading-relaxed">
              Sua carteira digital para autonomia financeira. 
              Powered by Stellar Network.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Produto</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Caixinhas</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Taxas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Empresa</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Suporte</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/40">
            © 2026 StellaCofre. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-background/40">
            <Mail className="h-4 w-4" />
            contato@stellacofre.com
          </div>
        </div>
      </div>
    </footer>
  );
}
