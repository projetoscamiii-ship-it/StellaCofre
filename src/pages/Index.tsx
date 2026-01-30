import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SignupModal } from "@/components/SignupModal";
import { LoginModal } from "@/components/LoginModal";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { ForgotPasswordModal } from "@/components/ForgotPasswordModal";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

function IndexContent() {
  const {
    isSignupOpen,
    closeSignup,
    isLoginOpen,
    closeLogin,
    isWalletModalOpen,
    closeWalletModal,
    isForgotPasswordOpen,
    closeForgotPassword,
    switchToLogin,
    switchToSignup,
    switchToForgotPassword,
  } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      
      {/* Auth Modals */}
      <SignupModal 
        open={isSignupOpen} 
        onOpenChange={closeSignup} 
        onSwitchToLogin={switchToLogin}
      />
      <LoginModal
        open={isLoginOpen}
        onOpenChange={closeLogin}
        onForgotPassword={switchToForgotPassword}
        onCreateAccount={switchToSignup}
      />
      <WalletConnectModal
        open={isWalletModalOpen}
        onOpenChange={closeWalletModal}
      />
      <ForgotPasswordModal
        open={isForgotPasswordOpen}
        onOpenChange={closeForgotPassword}
        onBackToLogin={switchToLogin}
      />
    </div>
  );
}

const Index = () => {
  return (
    <AuthProvider>
      <IndexContent />
    </AuthProvider>
  );
};

export default Index;
