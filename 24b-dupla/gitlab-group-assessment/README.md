# Resolvendo Conflitos

Quando diferentes mudanças ocorrem em uma mesma linha de código de um arquivo, quando realizamos um ``push``,``pull`` ou ``merge`` o git não consegue definir qual das mudanças estão corretas e nesse momento, você terá de escolher entre elas e auxiliar na resolução de conflito.

Nessa entrega, você poderá escolher entre dois formatos:

1. Fazer o trabalho sozinho;
2. Fazer o trabalho com a mesma dupla do antigo trabalho.

## Trabalhando Sozinho

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/gitlab-group-assessment) e faça o fork do projeto.

A partir da branch **Master**, crie uma branch chamada ``primeiro_fato``. Copie e cole o seguinte código, e edite com suas informações:

```html
<section id="primeiro_fato">
    <h1>Primeiro fato sobre mim(nós):</h1>

    <div>
        <aside>
            <img src="https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" alt="">
        </aside>
        <article>
            <h3>Subtitulo</h3> <!-- Altere com suas informações -->
            <p>Seu fato</p> <!-- Altere com suas informações -->
        </article>
    </div>
</section>
```

Faça um ``commit``, ``push``. Volte para a branch **Master** e repita o processo com uma branch ``segundo_fato``, e ``terceiro_fato``.

**Obs: Altere todas as tags possíveis com informações distintas em todas as branches.**

Depois disso, retorne para o branch **Master** e faça um merge com o branch ``primeiro_fato`` usando o código:

```
git merge origin/primeiro_fato
```

Repita o processo com todos os outros Branches, resolva os conflitos e por fim, envie no canvas o link do **repositório** e o link do **gitlab pages**.

## Trabalhando em Equipe

Para começar, o líder da sua Equipe deve acessar [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/gitlab-group-assessment) e fazer o fork do projeto. Depois disso, os outros integrandes podem fazer Clone do projeto do líder.

A partir da branch **Master**, cada DEV deverá criar uma branch com o prefixo ``primeiro_fato`` seguido de seu nome, ou seja, ``primeiro_fato_victor`` ou ``primeiro_fato_davis``. Copie e cole o seguinte código, e edite com suas informações:

```html
<section id="primeiro_fato">
    <h1>Primeiro fato sobre mim(nós):</h1>

    <div id="seu_nome">
        <aside>
            <img src="https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" alt="">
        </aside>
        <article>
            <h3>Subtitulo</h3> <!-- Altere com suas informações -->
            <p>Seu fato</p> <!-- Altere com suas informações -->
        </article>
    </div>
</section>

```

Faça um ``commit``, ``push``. Volte para a branch **Master** e repita o processo com uma branch ``segundo_fato_<seu_nome>``, e ``terceiro_fato<seu_nome>``.

**Obs: Altere todas as tags possíveis com informações distintas em todas as branches.**

Depois disso, retorne para o branch **Master** e faça um merge com o branch ``primeiro_fato`` de cada um dos DEVs usando o código:

```
git merge origin/primeiro_fato_<seu_nome>
```

Repita o processo com todos os outros Branches, resolva os conflitos e por fim, envie no canvas o link do **repositório** e o link do **gitlab pages**.

__O uso de Branches é obrigatório.__

__O objetivo dessa atividade é gerar conflitos. Estejam preparados para resolvê-los em equipe.__

## Como Enviar?

Depois que todas as pessoas da equipe terminarem o projeto, revisem os passos a seguir no seu projeto e confira se estão corretos:

- [x] Gerar GitlabPages;
- [x] Compartilhar com o grupo de correções da Kenzie Academy BR;
- [x] Enviar o link do Repositório e do GitlabPages;
- [x] Comentar o nome da sua dupla (em caso de entrega em dupla).
