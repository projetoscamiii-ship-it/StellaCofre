import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "sonner";

interface WalletConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const wallets = [
  {
    id: "metamask",
    name: "Metamask",
    description: "Carteira Ethereum popular",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
        <path d="M36.0112 3.33331L22.1207 13.6066L24.6679 7.55998L36.0112 3.33331Z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.98877 3.33331L17.7455 13.7133L15.3321 7.55998L3.98877 3.33331Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.0235 27.1333L27.3679 32.9L35.1235 35.0333L37.3679 27.28L31.0235 27.1333Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.64551 27.28L4.87663 35.0333L12.6322 32.9L8.97663 27.1333L2.64551 27.28Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.1977 17.8533L10.0088 21.1333L17.7199 21.48L17.4533 13.1333L12.1977 17.8533Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.8023 17.8533L22.4578 13.0266L22.1212 21.48L29.8323 21.1333L27.8023 17.8533Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.6323 32.9L17.2434 30.6733L13.2545 27.3333L12.6323 32.9Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.7566 30.6733L27.3678 32.9L26.7456 27.3333L22.7566 30.6733Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "stellar",
    name: "Stellar Wallet",
    description: "Freighter ou Albedo",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
        <circle cx="20" cy="20" r="18" fill="hsl(var(--secondary))" />
        <path
          d="M28.5 13.5L11.5 21.5L13 23L28.5 16V13.5Z"
          fill="white"
        />
        <path
          d="M11.5 18.5L28.5 26.5L27 28L11.5 21V18.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "rabby",
    name: "Rabby",
    description: "Carteira multi-chain",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
        <circle cx="20" cy="20" r="18" fill="#7C3AED" />
        <path
          d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 22.5 26.5 24.5 25 26C23.5 27.5 22 28 20 28C18 28 16.5 27.5 15 26C13.5 24.5 12 22.5 12 20Z"
          fill="white"
        />
        <circle cx="17" cy="18" r="2" fill="#7C3AED" />
        <circle cx="23" cy="18" r="2" fill="#7C3AED" />
      </svg>
    ),
  },
];

export function WalletConnectModal({ open, onOpenChange }: WalletConnectModalProps) {
  const handleConnect = (walletId: string, walletName: string) => {
    // Simulação de conexão - integração real requer SDKs específicos
    toast.success(`Conectando com ${walletName}...`, {
      description: "Integração em desenvolvimento",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden bg-card">
        {/* Header with gradient */}
        <div className="gradient-hero px-6 py-8 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Wallet className="h-7 w-7 text-primary-foreground" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary-foreground">
              Conectar Carteira
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80">
              Escolha sua carteira Web3 para começar
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Wallet options */}
        <div className="p-6 space-y-3">
          {wallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full h-auto py-4 px-4 justify-start gap-4 hover:bg-muted/50 transition-all hover:border-primary/50"
              onClick={() => handleConnect(wallet.id, wallet.name)}
            >
              <div className="flex-shrink-0">{wallet.icon}</div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{wallet.name}</p>
                <p className="text-sm text-muted-foreground">{wallet.description}</p>
              </div>
            </Button>
          ))}

          <p className="text-center text-xs text-muted-foreground pt-4">
            Ao conectar, você aceita nossos{" "}
            <a href="#" className="text-primary hover:underline">
              Termos de Uso
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
