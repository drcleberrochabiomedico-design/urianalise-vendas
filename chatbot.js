// Chatbot Urianálise na Prática
(function() {
  const BOT_NAME = 'Dr. Cleber';
  const COURSE_URL = 'https://pay.hotmart.com/S102786906P?checkoutMode=2';
  const SITE_URL = 'https://drcleberrochabiomedico-design.github.io/urianalise-vendas/';
  
  const responses = {
    'olá': `Olá! 👋 Sou o Dr. Cleber, criador do curso **Urianálise na Prática**. Como posso te ajudar?`,
    'ola': `Olá! 👋 Sou o Dr. Cleber, criador do curso **Urianálise na Prática**. Como posso te ajudar?`,
    'oi': `Oi! 👋 Tudo bem? Sou o Dr. Cleber. Quer saber mais sobre o curso de urianálise?`,
    'curso': `O **Urianálise na Prática** é um curso com 5 módulos focados exclusivamente em urianálise:\n\n📋 Fundamentos da Amostra\n🔬 Análise Físico-Química\n🔍 Sedimentoscopia na Prática\n🏥 Correlação Clínica\n📝 Laudo e Validação\n\n👉 [Garanta sua vaga por R$ 67](${COURSE_URL})`,
    'preço': `💰 **Oferta especial:**\n\nDe ~~R$ 158,00~~ por apenas **R$ 67,00**\nOu 6x de R$ 12,57 no cartão\n\n✅ Economia de R$ 91 (58% OFF)\n🛡️ Garantia de 7 dias\n\n👉 [Garantir minha vaga](${COURSE_URL})`,
    'preco': `💰 **Oferta especial:**\n\nDe ~~R$ 158,00~~ por apenas **R$ 67,00**\nOu 6x de R$ 12,57 no cartão\n\n✅ Economia de R$ 91 (58% OFF)\n🛡️ Garantia de 7 dias\n\n👉 [Garantir minha vaga](${COURSE_URL})`,
    'valor': `💰 O curso custa apenas **R$ 67,00** (ou 6x de R$ 12,57).\n\nAntes era R$ 158,00. Agora com 58% de desconto!\n\n👉 [Garantir minha vaga](${COURSE_URL})`,
    'inscrever': `Que ótimo! 🎉\n\n👉 [Clique aqui para se inscrever](${COURSE_URL})\n\nO pagamento é seguro pela Hotmart e você tem 7 dias de garantia.`,
    'inscrever-me': `Que ótimo! 🎉\n\n👉 [Clique aqui para se inscrever](${COURSE_URL})\n\nO pagamento é seguro pela Hotmart e você tem 7 dias de garantia.`,
    'garantir': `Para garantir sua vaga:\n\n👉 [Clique aqui](${COURSE_URL})\n\nPagamento seguro via Hotmart. Garantia de 7 dias.`,
    'módulos': `O curso tem **5 módulos**:\n\n1️⃣ **Fundamentos da Amostra** - Coleta, transporte e armazenamento\n2️⃣ **Análise Físico-Química** - Cor, densidade, pH, fita reagente\n3️⃣ **Sedimentoscopia na Prática** - Cilindros, cristais, células, bactérias\n4️⃣ **Correlação Clínica** - Relacionar achado com quadro do paciente\n5️⃣ **Laudo e Validação** - Emitir laudo completo e defensável`,
    'modulos': `O curso tem **5 módulos**:\n\n1️⃣ **Fundamentos da Amostra** - Coleta, transporte e armazenamento\n2️⃣ **Análise Físico-Química** - Cor, densidade, pH, fita reagente\n3️⃣ **Sedimentoscopia na Prática** - Cilindros, cristais, células, bactérias\n4️⃣ **Correlação Clínica** - Relacionar achado com quadro do paciente\n5️⃣ **Laudo e Validação** - Emitir laudo completo e defensável`,
    'microscopia': `A microscopia é o coração do curso! 🔬\n\nVocê vai aprender a identificar:\n- Cilindros (hialinos, granulosos, hemáticos)\n- Cristais (oxalato de cálcio, urato, fosfato)\n- Células (hemácias, leucócitos, células epiteliais)\n- Bactérias e leveduras\n\nCom imagens reais de lâmina e cases do dia a dia.`,
    'sedimento': `A sedimentoscopia é o módulo mais prático do curso! 🔍\n\nVocê vai ver imagens reais de lâmina e aprender a diferenciar:\n- Elementos reais vs artefatos de coleta\n- Cilindros vs contaminação\n- Cristais vs detritos\n\nCases do dia a dia laboratorial.`,
    'urianálise': `Urianálise é o exame completo da urina, que inclui:\n\n📊 **Análise Física** - Volume, cor, aspecto, odor, densidade\n🧪 **Análise Química** - Fita reagente (glicose, proteínas, pH, etc.)\n🔬 **Análise Microscópica** - Sedimento urinário\n\nNosso curso cobre todas essas etapas com foco na prática.`,
    'urianalise': `Urianálise é o exame completo da urina, que inclui:\n\n📊 **Análise Física** - Volume, cor, aspecto, odor, densidade\n🧪 **Análise Química** - Fita reagente (glicose, proteínas, pH, etc.)\n🔬 **Análise Microscópica** - Sedimento urinário\n\nNosso curso cobre todas essas etapas com foco na prática.`,
    'laudo': `O curso te ensina a emitir laudos completos e defensáveis:\n\n✅ O que escrever no laudo\n✅ O que NÃO escrever\n✅ Como validar com segurança\n✅ Como correlacionar achados com o quadro clínico`,
    'pre-analítico': `A fase pré-analítica é onde 70% dos erros começam! ⚠️\n\nO curso ensina:\n- Coleta correta da amostra\n- Conservação e transporte\n- Como evitar contaminações\n- Interferentes na análise`,
    'preanalitico': `A fase pré-analítica é onde 70% dos erros começam! ⚠️\n\nO curso ensina:\n- Coleta correta da amostra\n- Conservação e transporte\n- Como evitar contaminações\n- Interferentes na análise`,
    'preco analitico': `A fase pré-analítica é onde 70% dos erros começam! ⚠️\n\nO curso ensina:\n- Coleta correta da amostra\n- Conservação e transporte\n- Como evitar contaminações\n- Interferentes na análise`,
    'biomédico': `O curso é ideal para biomédicos! 🎯\n\nVocê vai:\n- Ganhar mais segurança na leitura da urina\n- Parar de travar na microscopia\n- Liberar laudos com confiança\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'biomedico': `O curso é ideal para biomédicos! 🎯\n\nVocê vai:\n- Ganhar mais segurança na leitura da urina\n- Parar de travar na microscopia\n- Liberar laudos com confiança\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'farmacêutico': `O curso é para farmacêuticos também! 💊\n\nSe você atua em análises clínicas e quer evitar erros na urianálise, esse curso é pra você.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'farmaceutico': `O curso é para farmacêuticos também! 💊\n\nSe você atua em análises clínicas e quer evitar erros na urianálise, esse curso é pra você.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'médico': `Médicos também se beneficiam do curso! 🩺\n\nSe você lida com exames urinários e quer interpretar melhor os achados, esse curso vai te ajudar.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'medico': `Médicos também se beneficiam do curso! 🩺\n\nSe você lida com exames urinários e quer interpretar melhor os achados, esse curso vai te ajudar.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'enfermagem': `Enfermeiros também podem fazer o curso! 🏥\n\nSe você quer entender a uroanálise com mais profundidade, o conteúdo é para você.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'garantia': `🛡️ **Garantia de 7 dias**\n\nSe você não sentir mais segurança para interpretar a urina, devolvemos seu dinheiro. Sem perguntas.\n\nÉ isso que a Hotmart garante.`,
    'hotmart': `O pagamento é feito pela **Hotmart**, plataforma segura e reconhecida.\n\n✅ Checkout seguro\n✅ Cartão de crédito, boleto ou PIX\n✅ Acesso imediato após confirmação`,
    'pagamento': `Formas de pagamento via Hotmart:\n\n💳 Cartão de crédito (6x de R$ 12,57)\n📱 PIX\n📄 Boleto\n\n✅ Pagamento seguro e acesso imediato!`,
    'certificado': `Sim, o curso tem certificado! 📜\n\nApós concluir todas as aulas, você recebe o certificado digital.`,
    'aulas': `O curso é 100% online e você tem acesso imediato!\n\n📱 Assiste no celular, tablet ou computador\n⏱️ No seu ritmo, sem prazo\n🔄 Revisa quantas vezes quiser`,
    'online': `Sim, o curso é 100% online! 🌐\n\n📱 Assiste em qualquer dispositivo\n⏱️ No seu ritmo\n🔄 Acesso vitalício`,
    'dúvida': `Se tiver qualquer dúvida, é só me perguntar aqui! 😊\n\nOu acesse: [Site do curso](${SITE_URL})`,
    'duvida': `Se tiver qualquer dúvida, é só me perguntar aqui! 😊\n\nOu acesse: [Site do curso](${SITE_URL})`,
    'obrigado': `De nada! 😊 Estou aqui se precisar.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'obrigada': `De nada! 😊 Estou aqui se precisar.\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'tchau': `Até mais! 👋 Bons estudos e bons laudos!\n\n👉 [Garanta sua vaga](${COURSE_URL})`,
    'site': `Acesse o site completo do curso:\n\n${SITE_URL}\n\nLá você encontra todas as informações, depoimentos e o link de compra.`,
    'preço': `💰 **Oferta especial:**\n\nDe ~~R$ 158,00~~ por apenas **R$ 67,00**\nOu 6x de R$ 12,57 no cartão\n\n👉 [Garantir minha vaga](${COURSE_URL})`,
  };

  const defaultResponse = `Não entendi bem. 😅 Posso te ajudar com:\n\n📚 **Sobre o curso**\n💰 **Preço e pagamento**\n📋 **Módulos**\n🔬 **Microscopia**\n📝 **Laudo**\n🛡️ **Garantia**\n\nOu clique aqui: [Site do curso](${SITE_URL})`;

  // Create styles
  const styles = document.createElement('style');
  styles.textContent = `
    #chatbot-toggle {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #F59E0B;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    #chatbot-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 30px rgba(245, 158, 11, 0.6);
    }
    #chatbot-toggle svg {
      width: 28px;
      height: 28px;
      fill: #0A0F1A;
    }
    #chatbot-toggle .close-icon {
      display: none;
    }
    #chatbot-toggle.active .chat-icon {
      display: none;
    }
    #chatbot-toggle.active .close-icon {
      display: block;
    }
    #chatbot-window {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 380px;
      max-width: calc(100vw - 48px);
      height: 520px;
      max-height: calc(100vh - 140px);
      background: #0A0F1A;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      z-index: 9998;
      display: none;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    #chatbot-window.active {
      display: flex;
    }
    #chatbot-header {
      background: #111827;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    #chatbot-header img {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #F59E0B;
    }
    #chatbot-header-info {
      flex: 1;
    }
    #chatbot-header-info h4 {
      color: #F9FAFB;
      font-size: 15px;
      font-weight: 600;
      margin: 0;
    }
    #chatbot-header-info p {
      color: #10B981;
      font-size: 12px;
      margin: 2px 0 0 0;
    }
    #chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    #chatbot-messages::-webkit-scrollbar {
      width: 4px;
    }
    #chatbot-messages::-webkit-scrollbar-thumb {
      background: #374151;
      border-radius: 2px;
    }
    .chat-msg {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .chat-msg.bot {
      background: #1F2937;
      color: #F9FAFB;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }
    .chat-msg.user {
      background: #F59E0B;
      color: #0A0F1A;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }
    .chat-msg a {
      color: #F59E0B;
      text-decoration: underline;
    }
    .chat-msg.user a {
      color: #0A0F1A;
    }
    .chat-msg strong {
      color: #F59E0B;
    }
    .chat-msg.user strong {
      color: #0A0F1A;
    }
    .chat-typing {
      display: flex;
      gap: 4px;
      padding: 12px 16px;
      background: #1F2937;
      border-radius: 16px;
      align-self: flex-start;
      width: fit-content;
    }
    .chat-typing span {
      width: 8px;
      height: 8px;
      background: #6B7280;
      border-radius: 50%;
      animation: typing 1.4s infinite;
    }
    .chat-typing span:nth-child(2) { animation-delay: 0.2s; }
    .chat-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-8px); opacity: 1; }
    }
    #chatbot-quick-replies {
      padding: 12px 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .quick-reply {
      background: #1F2937;
      color: #F59E0B;
      border: 1px solid #F59E0B;
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .quick-reply:hover {
      background: #F59E0B;
      color: #0A0F1A;
    }
    #chatbot-input {
      display: flex;
      padding: 12px 16px;
      gap: 8px;
      background: #111827;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    #chatbot-input input {
      flex: 1;
      background: #1F2937;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 12px 16px;
      color: #F9FAFB;
      font-size: 14px;
      outline: none;
    }
    #chatbot-input input::placeholder {
      color: #6B7280;
    }
    #chatbot-input input:focus {
      border-color: #F59E0B;
    }
    #chatbot-input button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #F59E0B;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    #chatbot-input button:hover {
      transform: scale(1.05);
    }
    #chatbot-input button svg {
      width: 20px;
      height: 20px;
      fill: #0A0F1A;
    }
    @media (max-width: 480px) {
      #chatbot-window {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0;
      }
      #chatbot-toggle {
        bottom: 16px;
        right: 16px;
      }
    }
  `;
  document.head.appendChild(styles);

  // Create HTML
  const chatbotHTML = `
    <button id="chatbot-toggle" aria-label="Abrir chat">
      <svg class="chat-icon" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      <svg class="close-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </button>
    <div id="chatbot-window">
      <div id="chatbot-header">
        <img src="img/avatar-1.jpg" alt="Dr. Cleber" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2235%22 r=%2220%22 fill=%22%23F59E0B%22/><ellipse cx=%2250%22 cy=%2280%22 rx=%2230%22 ry=%2220%22 fill=%22%23F59E0B%22/></svg>'">
        <div id="chatbot-header-info">
          <h4>Dr. Cleber</h4>
          <p>● Online agora</p>
        </div>
      </div>
      <div id="chatbot-messages"></div>
      <div id="chatbot-quick-replies">
        <button class="quick-reply" data-msg="curso">📚 Sobre o curso</button>
        <button class="quick-reply" data-msg="preço">💰 Preço</button>
        <button class="quick-reply" data-msg="módulos">📋 Módulos</button>
        <button class="quick-reply" data-msg="garantir">🎯 Inscrever-me</button>
      </div>
      <div id="chatbot-input">
        <input type="text" placeholder="Digite sua mensagem..." id="chatbot-text-input">
        <button id="chatbot-send" aria-label="Enviar">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>
  `;

  // Insert chatbot
  const container = document.createElement('div');
  container.innerHTML = chatbotHTML;
  document.body.appendChild(container);

  // Elements
  const toggle = document.getElementById('chatbot-toggle');
  const window_ = document.getElementById('chatbot-window');
  const messages = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-text-input');
  const sendBtn = document.getElementById('chatbot-send');
  const quickReplies = document.querySelectorAll('.quick-reply');

  let isOpen = false;

  // Toggle chat
  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    toggle.classList.toggle('active', isOpen);
    window_.classList.toggle('active', isOpen);
    if (isOpen && messages.children.length === 0) {
      addBotMessage(`Olá! 👋 Sou o Dr. Cleber, criador do curso **Urianálise na Prática**.\n\nComo posso te ajudar?`);
    }
  });

  // Add message
  function addBotMessage(text) {
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const msg = document.createElement('div');
      msg.className = 'chat-msg bot';
      msg.innerHTML = formatText(text);
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    }, 800 + Math.random() * 600);
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function formatText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
  }

  // Get response
  function getResponse(input) {
    const lower = input.toLowerCase().trim();
    
    // Check for exact matches first
    if (responses[lower]) return responses[lower];
    
    // Check for partial matches
    for (const [key, value] of Object.entries(responses)) {
      if (lower.includes(key)) return value;
    }
    
    // Keywords
    if (lower.includes('quanto') || lower.includes('custa') || lower.includes('preco')) return responses['preço'];
    if (lower.includes('comprar') || lower.includes('adquirir') || lower.includes('quero')) return responses['inscrever'];
    if (lower.includes('conteudo') || lower.includes('tem什么') || lower.includes('o que')) return responses['curso'];
    if (lower.includes('funciona') || lower.includes('como é')) return responses['curso'];
    if (lower.includes('err') || lower.includes('insegur') || lower.includes('duvid')) return responses['microscopia'];
    
    return defaultResponse;
  }

  // Send message
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    
    addUserMessage(text);
    input.value = '';
    
    setTimeout(() => {
      addBotMessage(getResponse(text));
    }, 300);
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Quick replies
  quickReplies.forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = btn.dataset.msg;
      addUserMessage(btn.textContent);
      setTimeout(() => {
        addBotMessage(getResponse(msg));
      }, 300);
    });
  });
})();
