

# Plano: Sistema de Autenticacao Dual (Carteira Web3 + Login Tradicional)

## Resumo

Implementar dois fluxos de autenticacao distintos:
1. **Botao "Comecar Agora"**: Modal de conexao com carteiras Web3 (Metamask, Stellar, Rabby)
2. **Botao "Entrar"**: Modal de login tradicional com e-mail/senha, recuperacao de senha, login Google e link para criar conta

---

## Arquivos a Serem Criados

| Arquivo | Descricao |
|---------|-----------|
| `src/components/WalletConnectModal.tsx` | Modal com opcoes de conexao de carteira Web3 |
| `src/components/LoginModal.tsx` | Modal de login tradicional completo |
| `src/components/ForgotPasswordModal.tsx` | Modal para recuperacao de senha |

## Arquivos a Serem Modificados

| Arquivo | Alteracao |
|---------|-----------|
| `src/contexts/AuthContext.tsx` | Adicionar estados e funcoes para os novos modais |
| `src/pages/Index.tsx` | Incluir os novos modais |
| `src/components/Header.tsx` | Conectar botoes aos modais corretos |
| `src/components/SignupModal.tsx` | Adicionar navegacao para login |

---

## Detalhes de Implementacao

### 1. WalletConnectModal (Comecar Agora)

O modal exibira tres opcoes de carteira com icones visuais:

- **Metamask**: Carteira Ethereum popular
- **Stellar Wallet**: Carteira nativa da rede Stellar (Freighter/Albedo)
- **Rabby**: Carteira multi-chain

Cada opcao tera:
- Icone/logo da carteira
- Nome da carteira
- Descricao breve
- Botao de conexao

Por enquanto, a conexao mostrara uma mensagem de sucesso simulada (toast), pois a integracao real requer SDKs especificos.

### 2. LoginModal (Entrar)

Formulario com:
- Campo de e-mail (validado com zod)
- Campo de senha com toggle de visibilidade
- Link "Esqueci minha senha"
- Botao de login principal
- Separador "ou"
- Botao de login com Google (icone + texto)
- Link "Criar conta" que abre o SignupModal

**Credenciais de Admin pre-definidas**:
- E-mail: `admin@stellacofre.com`
- Senha: `Admin@123`

### 3. ForgotPasswordModal

Formulario simples com:
- Campo de e-mail
- Botao de enviar link de recuperacao
- Mensagem de confirmacao apos envio

### 4. Atualizacao do AuthContext

Adicionar ao contexto:
- `isWalletModalOpen` / `openWalletModal` / `closeWalletModal`
- `isForgotPasswordOpen` / `openForgotPassword` / `closeForgotPassword`
- Funcao `switchToLogin` (fecha signup e abre login)
- Funcao `switchToSignup` (fecha login e abre signup)

---

## Fluxo de Navegacao

```text
+-------------------+     +-------------------+
|  Comecar Agora    |---->| WalletConnectModal|
+-------------------+     +-------------------+
                          | - Metamask        |
                          | - Stellar         |
                          | - Rabby           |
                          +-------------------+

+-------------------+     +-------------------+
|     Entrar        |---->|   LoginModal      |
+-------------------+     +-------------------+
                          | - Email/Senha     |
                          | - Esqueci senha --|---> ForgotPasswordModal
                          | - Login Google    |
                          | - Criar conta ----|---> SignupModal
                          +-------------------+
```

---

## Secao Tecnica

### Validacao com Zod (LoginModal)

```typescript
const loginSchema = z.object({
  email: z.string().trim().email({ message: "E-mail invalido" }),
  password: z.string().min(1, { message: "Senha obrigatoria" }),
});
```

### Verificacao de Admin

```typescript
const ADMIN_CREDENTIALS = {
  email: "admin@stellacofre.com",
  password: "Admin@123",
};

const onSubmit = (data: LoginFormData) => {
  if (data.email === ADMIN_CREDENTIALS.email && 
      data.password === ADMIN_CREDENTIALS.password) {
    toast.success("Login realizado com sucesso!");
    // Redirecionar ou atualizar estado
  } else {
    toast.error("Credenciais invalidas");
  }
};
```

### Icones de Carteira

Para os icones das carteiras, utilizarei SVGs inline ou componentes customizados, mantendo consistencia visual com o design existente.

### Botao Google

O botao de login com Google seguira o padrao visual do app, com icone do Google e texto "Continuar com Google". A integracao real com OAuth sera simulada nesta fase.

---

## Proximos Passos Apos Aprovacao

1. Criar `WalletConnectModal.tsx`
2. Criar `LoginModal.tsx`
3. Criar `ForgotPasswordModal.tsx`
4. Atualizar `AuthContext.tsx`
5. Atualizar `Header.tsx`
6. Atualizar `SignupModal.tsx`
7. Atualizar `Index.tsx`

