

# Plano: Substituir Texto do Botão

## Resumo

Alterar o texto do botão principal no Header de "Começar Agora" para "Conectar Carteira".

---

## Arquivo a Ser Modificado

| Arquivo | Alteração |
|---------|-----------|
| `src/components/Header.tsx` | Linha 40: trocar texto do botão |

---

## Alteração Específica

**Antes:**
```tsx
<Button variant="hero" size="sm" onClick={openWalletModal}>
  Começar Agora
</Button>
```

**Depois:**
```tsx
<Button variant="hero" size="sm" onClick={openWalletModal}>
  Conectar Carteira
</Button>
```

---

## Resultado

O botão no canto superior direito do Header exibirá "Conectar Carteira", tornando mais claro que a ação é conectar uma carteira Web3 (Metamask, Stellar ou Rabby).

