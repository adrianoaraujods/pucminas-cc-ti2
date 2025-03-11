# Entidades

## Usuário (user)

### Propriedades

- **id:** Identificador único do usuário (Chave primária).
- **name:** Nome do usuário.
- **email:** Email do usuário.
- **password:** Senha do usuário, acessível somente no servidor.
- **updatedAt:** Data do último acesso ou atualização do usuário.
- **createdAt:** Data de criação do usuário, acessível somente no servidor.

### Relações

- **wallets:** 1:N com a entidade Carteira (wallet).
- **categories:** 1:N com a entidade Categoria (category).

---

## Carteira (wallet)

- **id:** Identificador único da carteira (Chave primária).
- **name:** Nome da carteira.
- **updatedAt:** Data da última atualização da carteira.
- **createdAt:** Data de criação da carteira, acessível somente no servidor.

### Relações

- **userId:** N:1 com a entidade Usuário (user).
- **entries:** N:N com a entidade Entrada (entry).
- **recurring:** N:N com a entidade Recorrente (recurring).

---

## Categoria (category)

### Propriedades

- **id:** Identificador único da categoria (Chave primária).
- **title:** Título da categoria.
- **icon:** Ícone associado à categoria.
- **updatedAt:** Data da última atualização da categoria.
- **createdAt:** Data de criação da categoria, acessível somente no servidor.

## Relações

- **userId:** N:1 com a entidade Usuário (user).

---

## Registro (entry)

### Propriedades

- **id:** Identificador único do registro (Chave primária).
- **title:** Título do registro.
- **value:** Valor monetário do registro.
- **date:** Data do registro.
- **updatedAt:** Data da última atualização do registro.
- **createdAt:** Data de criação do registro, acessível somente no servidor.

### Relações

- **walletId:** N:1 com a entidade Carteira (wallet).
- **categoryId:** N:1 com a entidade Categoria (category), opcional.
- **recurrentId:** N:1 com a entidade Recorrente (recurring), opcional.

---

## Recorrente (recurring)

### Propriedades

- **id:** Identificador único da entrada recorrente (Chave primária).
- **title:** Título da entrada recorrente.
- **value:** Valor monetário da entrada recorrente.
- **period:** Distância entre as ocorrências.
- **type:** Tipo de recorrência (ex: "mensal", "anual").
- **startDate:** Data de início da recorrência.
- **endDate:** Data de término da recorrência.
- **updatedAt:** Data da última atualização da entrada recorrente.
- **createdAt:** Data de criação da entrada recorrente, acessível somente no servidor.

### Relações

- **walletId:** N:1 com a entidade Carteira (wallet).
- **entries:** M:N com a entidade Entrada (entry).
- **categoryId:** N:1 com a entidade Categoria (category), opcional.
