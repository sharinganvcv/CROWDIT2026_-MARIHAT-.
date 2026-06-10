(function() {
  const root = document.getElementById('chat-widget-root');
  if (!root) {
    console.error('Chat widget root not found!');
    return;
  }

  root.innerHTML = `
<div class="chat-widget" id="chat-widget">
  <button class="chat-toggle" id="chat-toggle" aria-label="Buka chat">
    <img src="https://cdn.corenexis.com/files/c/8518577720.png" alt="Avatar MariHat" />
  </button>
  <div class="chat-popup" id="chat-popup" aria-hidden="true">
    <div class="chat-header">
      <div class="header-info">
        <div class="header-avatar">
          <img src="https://cdn.corenexis.com/files/c/8518577720.png" alt="MariHat Bot" />
        </div>
        <div class="header-text">
          <h3>MariHat Bot</h3>
          <p><span class="status-dot"></span>Teman Sehatmu</p>
        </div>
      </div>
      <button class="chat-close" id="chat-close" aria-label="Tutup chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="chat-body" id="chat-body">
      <div class="chat-message-wrapper bot active">
        <div class="msg-avatar">
          <img src="https://cdn.corenexis.com/files/c/8518577720.png" alt="Bot" />
        </div>
        <div class="chat-message bot">
          <p>Hallo, menarik banget pertanyaan nya<br><br>Aku adalah MariHat bot yang selalu ada di dekatmu dan siap membantu seputar masalah kesehatanmu.</p>
        </div>
      </div>
      <p class="options-title">Kamu bisa tanya tentang:</p>
      <div class="chat-options-list" id="chat-options">
        <button type="button" class="option-card" data-topic="fisik">
          <div class="option-icon" style="color: #00c853;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path><polyline points="12 14 14 10 10 8 12 4"></polyline></svg></div>
          <div class="option-text"><h4>Kesehatan Fisik</h4><p>Olahraga, Tidur, Kebugaran</p></div>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <button type="button" class="option-card" data-topic="mental">
          <div class="option-icon" style="color: #00c853;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9z"></path><path d="M12 11v4"></path><path d="M12 7h.01"></path><path d="M8.5 14h7"></path></svg></div>
          <div class="option-text"><h4>Kesehatan Mental</h4><p>Stres, Fokus, Motivasi</p></div>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <button type="button" class="option-card" data-topic="tips">
          <div class="option-icon" style="color: #00c853;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
          <div class="option-text"><h4>Tips Belajar Sehat</h4><p>Belajar Efektif & Produktif</p></div>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <button type="button" class="option-card" data-topic="lainnya">
          <div class="option-icon" style="color: #00c853;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
          <div class="option-text"><h4>Tanya Lainnya</h4><p>Pertanyaan Bebas</p></div>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
    <form class="chat-input-area" id="chat-form">
      <div class="input-wrapper">
        <input type="text" id="chat-input" placeholder="Ketik Pertanyaanmu disini..." autocomplete="off" />
        <button type="submit" class="chat-send" aria-label="Kirim">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </button>
      </div>
    </form>
  </div>
</div>
  `;

  const initChat = () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatPopup = document.getElementById('chat-popup');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const chatOptions = document.getElementById('chat-options');

    if (!chatToggle || !chatPopup || !chatClose || !chatForm || !chatInput || !chatBody || !chatOptions) return;

    const botReplies = {
      fisik: 'Untuk kesehatan fisik, kamu bisa mulai dengan olahraga ringan sehari-hari, tidur cukup 7-8 jam, dan makan makanan bergizi. Konsistensi membuat perubahan lebih mudah.',
      mental: 'Kesehatan mental penting juga. Coba istirahatkan pikiran, curhat dengan teman, dan gunakan teknik relaksasi saat stres datang.',
      tips: 'Tips belajar sehat: buat jadwal, istirahat setiap 45-60 menit, minum air, dan jangan lupa bergerak ringan agar fokus tetap tajam.',
      lainnya: 'Silakan tanya apa saja. Aku siap bantu jawab pertanyaan tentang kesehatan atau kebiasaan sehat sehari-hari.'
    };

    const state = {
      waiting: false
    };

    const addMessage = (text, sender = 'bot') => {
      if (sender === 'bot') {
        const wrapper = document.createElement('div');
        wrapper.className = 'chat-message-wrapper bot';
        wrapper.innerHTML = `
          <div class="msg-avatar">
            <img src="https://cdn.corenexis.com/files/c/8518577720.png" alt="Bot" />
          </div>
          <div class="chat-message bot">
            <p>${text}</p>
          </div>
        `;
        chatBody.appendChild(wrapper);
      } else {
        const message = document.createElement('div');
        message.className = `chat-message user`;
        message.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(message);
      }
      chatBody.scrollTop = chatBody.scrollHeight;
    };

    const getBotReply = (text) => {
      const normalized = text.toLowerCase();
      if (/fisik|olahraga|makan|tidur|sehat fisik/.test(normalized)) return botReplies.fisik;
      if (/mental|stres|emosi|fokus|motivasi/.test(normalized)) return botReplies.mental;
      if (/belajar|tips|produktif|jadwal/.test(normalized)) return botReplies.tips;
      if (/halo|hai|terima kasih|thanks/.test(normalized)) return 'Halo juga! Silakan tanya tentang kesehatan fisik, mental, tips belajar sehat, atau hal lain.';
      return 'Pertanyaan menarik! Coba sebutkan apakah ini tentang kesehatan fisik, mental, tips belajar sehat, atau tanya lainnya.';
    };

    const sendBotReply = (text) => {
      const reply = getBotReply(text);
      addMessage(reply, 'bot');
      state.waiting = false;
      chatInput.disabled = false;
      chatInput.focus();
    };

    chatToggle.addEventListener('click', () => {
      const opened = chatPopup.classList.toggle('open');
      chatPopup.setAttribute('aria-hidden', String(!opened));
      if (opened) chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
      chatPopup.classList.remove('open');
      chatPopup.setAttribute('aria-hidden', 'true');
    });

    chatForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (state.waiting) return;
      const value = chatInput.value.trim();
      if (!value) return;
      addMessage(value, 'user');
      chatInput.value = '';
      state.waiting = true;
      chatInput.disabled = true;
      setTimeout(() => sendBotReply(value), 450);
    });

    chatOptions.addEventListener('click', (event) => {
      const option = event.target.closest('button[data-topic]');
      if (!option || state.waiting) return;
      const topic = option.dataset.topic;
      const topicTitle = option.querySelector('h4').textContent;
      addMessage(topicTitle, 'user');
      state.waiting = true;
      chatInput.disabled = true;
      setTimeout(() => {
        addMessage(botReplies[topic] || botReplies.lainnya, 'bot');
        state.waiting = false;
        chatInput.disabled = false;
        chatInput.focus();
      }, 350);
    });
  };

  initChat();
})();
