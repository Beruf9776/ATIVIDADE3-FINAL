document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    const pages = {
        home: `
            <div id="home">
                <img src="di.png" alt="Logo Livraria Dois Irmãos" class="logo">
                <h1>Bem-vindo à Livraria Dois Irmãos</h1>
                <p>Descubra mundos, explore ideias e embarque em jornadas inesquecíveis através das páginas dos nossos livros. Aqui, cada história é uma porta para novas possibilidades.</p>
            </div>
        `,
        sobre: `
            <div id="sobre">
                <h2>Sobre Nós</h2>
                <p>Fundada em 2019 pelos irmãos Fernando e Flávio, filhos de uma professora de língua portuguesa e um advogado, a Livraria Dois Irmãos nasceu do amor pela literatura e do desejo de compartilhar conhecimento.</p>
                <p>Nossa missão é promover a leitura como uma ferramenta de transformação pessoal e social, especialmente entre os jovens. Acreditamos que cada livro tem o poder de abrir mentes, inspirar sonhos e mudar vidas.</p>
                <h3>Nossos Valores</h3>
                <ul>
                    <li>Ética em todos os aspectos do nosso negócio</li>
                    <li>Compromisso com a educação e o desenvolvimento intelectual</li>
                    <li>Respeito à diversidade de ideias e culturas</li>
                    <li>Inovação na promoção da leitura</li>
                </ul>
                <p>A leitura não apenas amplia nosso vocabulário e melhora nossas habilidades de comunicação, mas também nos ensina empatia, estimula a criatividade e nos ajuda a compreender melhor o mundo ao nosso redor. Em um mundo cada vez mais digital, acreditamos que o hábito da leitura é fundamental para desenvolver o pensamento crítico e a capacidade de concentração.</p>
            </div>
        `,
        produtos: `
            <div id="produtos">
                <div class="categoria">
                    <h2>Literatura Cyberpunk</h2>
                    <div class="livros">
                        ${gerarLivros(5, 'Literatura Cyberpunk')}
                    </div>
                </div>
                <div class="categoria">
                    <h2>Literatura Brasileira</h2>
                    <div class="livros">
                        ${gerarLivros(5, 'Literatura Brasileira')}
                    </div>
                </div>
                <div class="categoria">
                    <h2>Literatura Russa</h2>
                    <div class="livros">
                        ${gerarLivros(5, 'Literatura Russa')}
                    </div>
                </div>
                <div class="categoria">
                    <h2>Clássicos</h2>
                    <div class="livros">
                        ${gerarLivros(5, 'Clássicos')}
                    </div>
                </div>
                <div class="categoria">
                    <h2>Literatura Inglesa</h2>
                    <div class="livros">
                        ${gerarLivros(5, 'Literatura Inglesa')}
                    </div>
                </div>
            </div>
        `,
        contato: `
            <div id="contato">
                <h2>Entre em Contato</h2>
                <p>E-mail: <a href="mailto:contato@livrariadoisirmaos.com">contato@livrariadoisirmaos.com</a></p>
                <p>WhatsApp: <a href="https://web.whatsapp.com/send?phone=5511999999999">+55 (11) 99999-9999</a></p>
                <h3>Formulário de Contato</h3>
                <form>
                    <input type="text" placeholder="Nome" required>
                    <input type="tel" placeholder="Telefone" required>
                    <input type="text" placeholder="Assunto" required>
                    <input type="email" placeholder="E-mail" required>
                    <textarea placeholder="Mensagem" rows="5" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        `,
        faq: `
            <div id="faq">
                <h2>Perguntas Frequentes</h2>
                <div class="faq-item">
                    <div class="faq-question">1. Qual é o prazo de entrega dos livros?</div>
                    <div class="faq-answer">Nosso prazo de entrega varia de 3 a 7 dias úteis, dependendo da sua localização.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">2. Vocês fazem entregas internacionais?</div>
                    <div class="faq-answer">Sim, realizamos entregas para diversos países. Entre em contato para mais informações.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">3. Como posso rastrear meu pedido?</div>
                    <div class="faq-answer">Você receberá um e-mail com o código de rastreamento assim que seu pedido for despachado.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">4. Vocês têm uma loja física?</div>
                    <div class="faq-answer">Atualmente, operamos apenas online, mas estamos planejando abrir uma loja física em breve.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">5. Quais são as formas de pagamento aceitas?</div>
                    <div class="faq-answer">Aceitamos cartões de crédito, débito, boleto bancário e transferência bancária.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">6. Vocês oferecem descontos para compras em grande quantidade?</div>
                    <div class="faq-answer">Sim, oferecemos descontos especiais para escolas, bibliotecas e compras corporativas.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">7. Como funciona a política de trocas e devoluções?</div>
                    <div class="faq-answer">Você tem até 7 dias após o recebimento para solicitar a troca ou devolução de um produto.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">8. Vocês vendem e-books?</div>
                    <div class="faq-answer">Sim, temos uma ampla seleção de e-books disponíveis em nossa loja virtual.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">9. Como posso me tornar um autor publicado pela Livraria Dois Irmãos?</div>
                    <div class="faq-answer">Entre em contato conosco através do e-mail autores@livrariadoisirmaos.com para mais informações sobre nosso processo de submissão.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">10. Vocês oferecem programas de fidelidade?</div>
                    <div class="faq-answer">Sim, temos um programa de pontos onde cada compra acumula pontos que podem ser trocados por descontos em compras futuras.</div>
                </div>
            </div>
        `
    };

    function gerarLivros(quantidade, categoria) {
        let livros = '';
        const titulos = {
            'Literatura Cyberpunk': ['Neuromancer', 'Snow Crash', 'Do Androids Dream of Electric Sheep?', 'Altered Carbon', 'The Diamond Age'],
            'Literatura Brasileira': ['Grande Sertão: Veredas', 'Dom Casmurro', 'Memórias Póstumas de Brás Cubas', 'O Cortiço', 'Vidas Secas'],
            'Literatura Russa': ['Crime e Castigo', 'Anna Karenina', 'Guerra e Paz', 'Os Irmãos Karamazov', 'Lolita'],
            'Clássicos': ['1984', 'O Pequeno Príncipe', 'Orgulho e Preconceito', 'Cem Anos de Solidão', 'O Senhor dos Anéis'],
            'Literatura Inglesa': ['O Morro dos Ventos Uivantes', 'Frankenstein', 'Oliver Twist', 'Admirável Mundo Novo', 'A Máquina do Tempo']
        };
        
        for (let i = 0; i < quantidade; i++) {
            const titulo = titulos[categoria][i % titulos[categoria].length];
            const imagemUrl = `capas/${categoria.toLowerCase().replace(/\s+/g, '-')}/${i + 1}.jpg`;
            livros += `
                <div class="livro">
                    <img src="${imagemUrl}" alt="Capa do Livro ${titulo}">
                    <h3>${titulo}</h3>
                    <button class="comprar">+ Comprar</button>
                    <p>$10,00</p>
                </div>
            `;
        }
        return livros;
    }

    function carregarPagina(pagina) {
        content.innerHTML = pages[pagina];
        if (pagina === 'faq') {
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                });
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pagina = e.target.getAttribute('href').substring(1);
            carregarPagina(pagina);
        });
    });

    // Carregar a página inicial por padrão
    carregarPagina('home');
});
