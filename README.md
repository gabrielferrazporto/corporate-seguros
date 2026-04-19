# Corporate Corretora de Seguros

Site institucional one page da **Corporate Corretora de Seguros**, desenvolvido com HTML, CSS, JavaScript e Bootstrap.

## Estrutura do projeto

```text
.
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── favicon.png
└── imagens/
    ├── logo.png
    └── logoSemFundo.png
```

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

## Como editar contatos

Os principais dados de contato ficam centralizados no arquivo `script.js`, no objeto `CONTACT_CONFIG`.

Edite ali:

- WhatsApp
- mensagem padrão do WhatsApp
- telefone
- e-mail
- endereço
- links de redes sociais

Exemplo:

```js
const CONTACT_CONFIG = {
    whatsappNumber: "5531988331904",
    whatsappMessage: "Olá, gostaria de solicitar uma cotação de seguro.",
    phoneDisplay: "(31) 98833-1904",
    phoneHref: "+5531988331904",
    email: "mayrom.seguros@gmail.com",
    address: "Avenida 28 de Abril, 176, Centro, Ipatinga - MG",
    socialLinks: {
        instagram: "https://www.instagram.com/corporatecorretora"
    }
};
```

## Como publicar na hospedagem

Envie todos os arquivos para a raiz do site na hospedagem, geralmente a pasta `public_html`.

A estrutura na hospedagem deve ficar assim:

```text
public_html/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── favicon.png
└── imagens/
```

Depois de publicar, teste:

```text
https://corporatecorretora.com.br/
https://corporatecorretora.com.br/sitemap.xml
https://corporatecorretora.com.br/robots.txt
https://corporatecorretora.com.br/favicon.png
```

## Cache após alterações

Se o site não atualizar no celular ou navegador, pode ser cache.

Para forçar atualização de CSS e JS, altere no `index.html`:

```html
<link rel="stylesheet" href="style.css?v=2">
<script src="script.js?v=2"></script>
```

Em próximas alterações, aumente o número:

```text
?v=3
?v=4
?v=5
```

## SEO

O projeto já possui:

- title otimizado
- meta description
- canonical
- Open Graph
- Twitter Card
- JSON-LD com `InsuranceAgency`
- `robots.txt`
- `sitemap.xml`
- favicon na raiz

Após publicar, recomenda-se:

- cadastrar o domínio no Google Search Console
- enviar o sitemap `https://corporatecorretora.com.br/sitemap.xml`
- solicitar indexação da página inicial
- criar ou atualizar o Perfil da Empresa no Google
- manter nome, telefone e endereço iguais no site, Google e Instagram

## Observações

- O site usa Bootstrap e Bootstrap Icons via CDN.
- O botão flutuante e os CTAs usam o link de WhatsApp gerado automaticamente pelo `script.js`.
- O domínio configurado no SEO é `https://corporatecorretora.com.br/`.
