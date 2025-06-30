let translateButton = document.querySelector("#chat_button");
let chatForm = document.querySelector(".chat_input-group");
let textInput = document.querySelector("#chat_input");
let languageSelect = document.querySelector("#chat_select");

// Handle form submission
chatForm.addEventListener("submit", handleTranslation);

// Handle button click (fallback)
translateButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleTranslation(e);
});

// Handle Enter key in input
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleTranslation(e);
  }
});

async function handleTranslation(e) {
  e.preventDefault();

  let inputText = textInput.value.trim();
  let selectedLanguage = languageSelect.value;

  if (!inputText || !selectedLanguage) {
    showError("Por favor, escribe un texto a traducir y selecciona un idioma.");
    return false;
  }

  // Disable button and show loading state
  setLoadingState(true);

  // Show user message
  addMessage(inputText, "user");

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
        language: selectedLanguage,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "La traducción falló.");
    }

    // Add translated message
    addMessage(data.translatedText, "bot");

    // Clear input
    textInput.value = "";
    textInput.focus();

  } catch (error) {
    console.error("Error during translation:", error);
    addMessage("❌ Error: No se pudo realizar la traducción. Por favor, inténtalo de nuevo.", "bot");
  } finally {
    setLoadingState(false);
  }
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `chat_message chat_message--${sender}`;
  message.textContent = text;

  const chatContainer = document.querySelector(".chat_messages");
  chatContainer.appendChild(message);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function setLoadingState(isLoading) {
  translateButton.disabled = isLoading;
  translateButton.innerHTML = isLoading
    ? '<span>🔄 Traduciendo...</span>'
    : '<span>✨ Traducir</span>';

  textInput.disabled = isLoading;
  languageSelect.disabled = isLoading;
}

function showError(message) {
  // You could replace this with a more elegant toast notification
  alert(message);

  // Focus on the appropriate field
  if (!textInput.value.trim()) {
    textInput.focus();
  } else if (!languageSelect.value) {
    languageSelect.focus();
  }
}
