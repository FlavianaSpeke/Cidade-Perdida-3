const storyData = {
  inicio: {
    title: "PASSO 1: O Início em Curitiba",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    text: "Você é um historiador em busca de uma civilização antiga no Paraná. Em Curitiba, você encontra duas pistas promissoras sobre a localização da cidade perdida.",
    choices: [
      { text: "Seguir para Morretes (Pegar o trem pela Serra do Mar)", nextStep: "morretes" },
      { text: "Seguir para Ponta Grossa (Explorar as rochas de Vila Velha)", nextStep: "pontaGrossa" }
    ]
  },
  morretes: {
    title: "PASSO 2A: O Caminho do Litoral",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    text: "Você chega a Morretes cortando as montanhas da Serra do Mar. Um pescador local menciona ter visto ruínas misteriosas nas ilhas da região do litoral.",
    choices: [
      { text: "Ir para Paranaguá (Investigar o porto e as ilhas)", nextStep: "paranagua" },
      { text: "Subir para Guaratuba (Procurar nas praias do sul)", nextStep: "guaratuba" }
    ]
  },
  pontaGrossa: {
    title: "PASSO 2B: O Caminho dos Campos Gerais",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    text: "Nas imensas formações rochosas de Vila Velha, em Ponta Grossa, você descobre uma antiga inscrição entalhada na pedra.",
    choices: [
      { text: "Ir para Guarapuava (Entrar na mata fechada do centro)", nextStep: "guarapuava" },
      { text: "Ir para Londrina (Investigar a região norte)", nextStep: "londrina" }
    ]
  },
  paranagua: {
    title: "PASSO 3: O Amuleto do Litoral",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    text: "Em Paranaguá, você encontra um amuleto antigo no Mar de Dentro! As inscrições nele revelam coordenadas do oeste paranaense.",
    choices: [
      { text: "Seguir para Cascavel (Procurar pistas no entroncamento do oeste)", nextStep: "cascavel" },
      { text: "Seguir para Foz do Iguaçu (Investigar a névoa das Cataratas)", nextStep: "vitoria" }
    ]
  },
  guaratuba: {
    title: "FIM DE JOGO: Pista Perdida",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    text: "Você aproveitou as praias de Guaratuba, mas perdeu o sinal da pista. Você virou apenas mais um turista na praia.",
    choices: []
  },
  guarapuava: {
    title: "PASSO 3: A Caverna do Centro",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    text: "Nas florestas densas de Guarapuava, você descobre uma caverna oculta com inscrições em relevo. O mapa aponta para a região oeste.",
    choices: [
      { text: "Seguir para Maringá (Procurar sob a sombra da catedral)", nextStep: "maringa" },
      { text: "Seguir para Toledo (Explorar o vale dos rios no oeste)", nextStep: "toledo" },
      { text: "Seguir para Foz do Iguaçu (Investigar a névoa das Cataratas)", nextStep: "vitoria" }
    ]
  },
  cascavel: {
    title: "PASSO 4: O Cruzamento do Oeste",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    text: "Em Cascavel, no entroncamento das rotas antigas de Peabiru, o amuleto começa a vibrar indicando a direção correta do santuário secreto.",
    choices: [
      { text: "Avançar para Foz do Iguaçu (Seguir o sinal em direção às quedas d'água)", nextStep: "vitoria" }
    ]
  },
  toledo: {
    title: "FIM DE JOGO: O Rio Errado",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    text: "Você seguiu o curso do rio até Toledo, mas os marcadores indígenas antigos desapareceram na vegetação. A trilha esfriou.",
    choices: []
  },
  londrina: {
    title: "FIM DE JOGO: Pista Falsa",
    image: "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=800&auto=format&fit=crop",
    text: "A pista levava a um beco sem saída. Você acabou em um café urbano em Londrina sem nenhuma resposta.",
    choices: []
  },
  maringa: {
    title: "FIM DE JOGO: Trilha Perdida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    text: "As pistas antigas não correspondem à estrutura da cidade moderna de Maringá. A trilha esfriou.",
    choices: []
  },
  vitoria: {
    title: "PASSO FINAL: A Descoberta!",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    text: "Atrás da cortina d'água das Cataratas em Foz do Iguaçu, uma passagem secreta revela ruínas milenares esquecidas no tempo. Você descobriu a Cidade Perdida de Peabiru sob a vegetação do Paraná!",
    choices: []
  }
};

function selectChoice(nextStep) {
  renderStep(nextStep);
}

function renderStep(stepKey) {
  const step = storyData[stepKey];
  
  document.getElementById("location-title").innerText = step.title;
  document.getElementById("story-text").innerText = step.text;
  
  const imgElement = document.getElementById("story-image");
  imgElement.src = step.image;
  imgElement.alt = step.title;
  
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  
  step.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => selectChoice(choice.nextStep);
    choicesContainer.appendChild(button);
  });
}

function startGame() {
  renderStep("inicio");
}

window.onload = startGame;