import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { KeyRound, Mail, ArrowLeft, CheckCircle } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().trim().email({ message: "E-mail inválido" }),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBackToLogin: () => void;
}

export function ForgotPasswordModal({
  open,
  onOpenChange,
  onBackToLogin,
}: ForgotPasswordModalProps) {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Reset password for:", data.email);
    setIsEmailSent(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    form.reset();
    setIsEmailSent(false);
  };

  const handleBackToLogin = () => {
    handleClose();
    onBackToLogin();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden bg-card">
        {/* Header with gradient */}
        <div className="gradient-hero px-6 py-8 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            {isEmailSent ? (
              <CheckCircle className="h-7 w-7 text-primary-foreground" />
            ) : (
              <KeyRound className="h-7 w-7 text-primary-foreground" />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary-foreground">
              {isEmailSent ? "E-mail Enviado!" : "Recuperar Senha"}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80">
              {isEmailSent
                ? "Verifique sua caixa de entrada"
                : "Digite seu e-mail para receber o link de recuperação"}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          {isEmailSent ? (
            <div className="space-y-6">
              <div className="rounded-lg bg-muted/50 p-4 text-center space-y-2">
                <Mail className="h-10 w-10 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">
                  Enviamos um link de recuperação para{" "}
                  <span className="font-medium text-foreground">
                    {form.getValues("email")}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Não recebeu? Verifique sua pasta de spam ou tente novamente.
                </p>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleBackToLogin}
              >
                Voltar para Login
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar Link de Recuperação
                  <Mail className="h-5 w-5" />
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  className="w-full"
                  onClick={handleBackToLogin}
                >
                  <ArrowLeft className="h-5 w-5" />
                  Voltar para Login
                </Button>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
