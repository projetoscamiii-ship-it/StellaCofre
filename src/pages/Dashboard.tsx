import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Plane, Shield, GraduationCap, Home, Gift, Wallet, Plus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface GoalCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const goalCategories: GoalCategory[] = [
  {
    id: "viagem",
    name: "Viagem dos Sonhos",
    icon: <Plane className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-400",
    description: "Planeje sua próxima aventura"
  },
  {
    id: "emergencia",
    name: "Reserva de Emergência",
    icon: <Shield className="h-8 w-8" />,
    color: "from-green-500 to-emerald-400",
    description: "Segurança para imprevistos"
  },
  {
    id: "educacao",
    name: "Educação",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "from-purple-500 to-violet-400",
    description: "Invista no seu conhecimento"
  },
  {
    id: "casa",
    name: "Casa Própria",
    icon: <Home className="h-8 w-8" />,
    color: "from-orange-500 to-amber-400",
    description: "Realize o sonho da casa própria"
  },
  {
    id: "presente",
    name: "Presente Especial",
    icon: <Gift className="h-8 w-8" />,
    color: "from-pink-500 to-rose-400",
    description: "Surpreenda quem você ama"
  },
  {
    id: "pessoal",
    name: "Fundo Pessoal",
    icon: <Wallet className="h-8 w-8" />,
    color: "from-indigo-500 to-blue-400",
    description: "Seus objetivos pessoais"
  }
];

interface Goal {
  id: string;
  categoryId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<GoalCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCategoryClick = (category: GoalCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCreateGoal = () => {
    if (!selectedCategory || !goalName || !targetAmount) {
      toast.error("Preencha todos os campos");
      return;
    }

    const newGoal: Goal = {
      id: crypto.randomUUID(),
      categoryId: selectedCategory.id,
      name: goalName,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0
    };

    setGoals([...goals, newGoal]);
    toast.success(`Meta "${goalName}" criada com sucesso!`);
    setIsModalOpen(false);
    setGoalName("");
    setTargetAmount("");
    setSelectedCategory(null);
  };

  const handleCreateNewCategory = () => {
    if (!newCategoryName) {
      toast.error("Digite um nome para a categoria");
      return;
    }

    toast.success(`Categoria "${newCategoryName}" criada com sucesso!`);
    setIsNewCategoryModalOpen(false);
    setNewCategoryName("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Stella<span className="text-gradient">Cofre</span>
              </span>
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Olá, <span className="font-semibold text-foreground">Admin</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Suas <span className="text-gradient">Caixinhas</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha uma categoria para criar sua meta de poupança ou crie uma nova categoria personalizada.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {goalCategories.map((category) => {
            const categoryGoals = goals.filter(g => g.categoryId === category.id);
            const hasGoals = categoryGoals.length > 0;
            
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-border/50 overflow-hidden"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden md:block">
                    {category.description}
                  </p>
                  {hasGoals && (
                    <div className="mt-3 text-xs font-medium text-primary">
                      {categoryGoals.length} meta{categoryGoals.length > 1 ? 's' : ''} ativa{categoryGoals.length > 1 ? 's' : ''}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {/* Create New Category Card */}
          <Card 
            className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-dashed border-2 border-border/50 hover:border-primary/50"
            onClick={() => setIsNewCategoryModalOpen(true)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-muted-foreground text-sm md:text-base group-hover:text-foreground transition-colors">
                Criar Nova Categoria
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* Active Goals Section */}
        {goals.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Metas Ativas
            </h2>
            <div className="grid gap-4">
              {goals.map((goal) => {
                const category = goalCategories.find(c => c.id === goal.categoryId);
                const progress = (goal.currentAmount / goal.targetAmount) * 100;
                
                return (
                  <Card key={goal.id} className="border-border/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-400'} flex items-center justify-center text-white flex-shrink-0`}>
                        {category?.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{goal.name}</h3>
                        <p className="text-sm text-muted-foreground">{category?.name}</p>
                        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category?.color || 'from-primary to-primary'} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-foreground">
                          R$ {goal.currentAmount.toLocaleString('pt-BR')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          de R$ {goal.targetAmount.toLocaleString('pt-BR')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Create Goal Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedCategory && (
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedCategory.color} flex items-center justify-center text-white`}>
                  {selectedCategory.icon}
                </div>
              )}
              <span>{selectedCategory?.name}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="goalName">Nome da Meta</Label>
              <Input
                id="goalName"
                placeholder="Ex: Viagem para Paris"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAmount">Valor da Meta (R$)</Label>
              <Input
                id="targetAmount"
                type="number"
                placeholder="Ex: 10000"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="hero" onClick={handleCreateGoal}>
              Criar Meta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create New Category Modal */}
      <Dialog open={isNewCategoryModalOpen} onOpenChange={setIsNewCategoryModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Plus className="h-5 w-5 text-muted-foreground" />
              </div>
              <span>Criar Nova Categoria</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="categoryName">Nome da Categoria</Label>
              <Input
                id="categoryName"
                placeholder="Ex: Aposentadoria"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewCategoryModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="hero" onClick={handleCreateNewCategory}>
              Criar Categoria
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
