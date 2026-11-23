// ==========================================
// NGÂN HÀNG CÂU HỎI
// ==========================================

const normalQuestions = [
  {
    question: "Nghề trồng hoa kiểng nổi tiếng ở Sa Đéc thuộc tỉnh nào?",
    answers: ["Đồng Tháp", "An Giang", "Cà Mau"],
    correct: 0,
  },
  {
    question: "Cầu Rồng nổi tiếng nằm ở thành phố nào?",
    answers: ["Hà Nội", "Đà Nẵng", "Huế"],
    correct: 1,
  },
  {
    question: "Lễ Khao lề thế lính Hoàng Sa gắn liền với hoạt động nào?",
    answers: [
      "Tưởng nhớ những người lính làm nhiệm vụ bảo vệ chủ quyền biển đảo",
      "Cầu mưa thuận gió hòa",
      "Tưởng nhớ các vị vua triều Nguyễn",
    ],
    correct: 0,
  },
  {
    question: "Không gian văn hóa Cồng chiêng gắn liền với khu vực nào?",
    answers: ["Đồng bằng sông Cửu Long", "Tây Nguyên", "Đồng bằng Bắc Bộ"],
    correct: 1,
  },
  {
    question: "Lễ hội Katê là lễ hội truyền thống của dân tộc nào?",
    answers: ["Chăm", "Ê Đê", "S'tiêng"],
    correct: 0,
  },
  {
    question:
      "Gốm Bàu Trúc là nghề thủ công truyền thống nổi tiếng của dân tộc nào?",
    answers: ["Kinh", "Chăm", "Khmer"],
    correct: 1,
  },
  {
    question:
      "Nhà dài truyền thống là nét kiến trúc đặc trưng của dân tộc nào?",
    answers: ["Ê Đê", "Chăm", "Tày"],
    correct: 0,
  },
  {
    question:
      "Nghề dệt thổ cẩm truyền thống của người S'tiêng tạo ra sản phẩm gì?",
    answers: ["Đồ gốm", "Vải dệt hoa văn", "Đồ kim loại"],
    correct: 1,
  },
  {
    question: "Làng hoa Sa Đéc thường nhộn nhịp nhất vào thời điểm nào?",
    answers: ["Dịp cuối năm, trước Tết", "Giữa mùa hè", "Sau Tết Trung thu"],
    correct: 0,
  },
  {
    question: "Chợ nổi Cái Răng thuộc thành phố nào?",
    answers: ["Cần Thơ", "Đà Nẵng", "Hải Phòng"],
    correct: 0,
  },
];

const quanQuestions = [
  {
    question:
      "Lễ hội Nghinh Ông Sông Đốc ở Cà Mau thường diễn ra vào thời gian nào?",
    answers: [
      "Ngày 14–16 tháng 2 âm lịch",
      "Ngày 14–16 tháng 8 âm lịch",
      "Ngày 22–27 tháng 4 âm lịch",
    ],
    correct: 0,
  },
  {
    question: "Lễ hội Vía Bà Chúa Xứ Núi Sam được UNESCO ghi danh vào năm nào?",
    answers: ["Năm 2016", "Năm 2021", "Năm 2024"],
    correct: 2,
  },
];

// ==========================================
// TRẠNG THÁI GAME
// ==========================================

// 0-9: ô nhỏ, 10-11: ô quan
let board = Array(10).fill(5).concat([0, 0]);
let completed = Array(12).fill(false);

let score = 0;
let answeredCount = 0;
let player = "Người chơi";

let currentPit = null;
let isSowing = false;
let hasAnswered = false;
let audioContext = null;

// ==========================================
// LẤY PHẦN TỬ
// ==========================================

const welcome = document.getElementById("welcome");
const game = document.getElementById("game");
const result = document.getElementById("result");

const questionPanel = document.getElementById("questionPanel");
const questionType = document.getElementById("questionType");
const questionPoint = document.getElementById("questionPoint");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const continueBtn = document.getElementById("continueBtn");

// ==========================================
// ÂM THANH
// ==========================================

function getAudio() {
  if (!audioContext) {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (AudioClass) audioContext = new AudioClass();
  }

  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function tone(frequency, duration, type = "sine") {
  const ctx = getAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;

  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + duration);
}

function clickSound() {
  tone(550, 0.08);
}

function correctSound() {
  tone(660, 0.12);
  setTimeout(() => tone(880, 0.18), 120);
}

function wrongSound() {
  tone(220, 0.2, "triangle");
}

function sowSound() {
  tone(430 + Math.random() * 180, 0.055, "triangle");
}

function applause() {
  const ctx = getAudio();
  if (!ctx) return;

  for (let i = 0; i < 35; i++) {
    const start = ctx.currentTime + Math.random() * 3;
    const duration = 0.04 + Math.random() * 0.05;
    const size = Math.floor(ctx.sampleRate * duration);

    const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let j = 0; j < size; j++) {
      data[j] = (Math.random() * 2 - 1) * (1 - j / size);
    }

    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    source.buffer = buffer;
    filter.type = "highpass";
    filter.frequency.value = 900;

    gain.gain.setValueAtTime(0.18, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start(start);
  }
}

// ==========================================
// TIỆN ÍCH
// ==========================================

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Chiều ngược kim đồng hồ: giảm chỉ số
function nextPit(index) {
  return (index - 1 + 12) % 12;
}

function updateBoard() {
  document.querySelectorAll("[data-pit]").forEach((button) => {
    const index = Number(button.dataset.pit);
    const count = board[index];

    button.querySelector(".stones").textContent = `${count} quân`;

    button.classList.toggle("pit-done", completed[index]);
    button.disabled = completed[index] || isSowing || hasAnswered;
  });

  document.getElementById("score").textContent = score;
  document.getElementById("progress").textContent = `${answeredCount}/12`;
}

function setStatus(message) {
  document.getElementById("gameStatus").textContent = message;
}

function animatePit(index) {
  const button = document.querySelector(`[data-pit="${index}"]`);
  if (!button) return;

  button.classList.remove("sowing");
  void button.offsetWidth;
  button.classList.add("sowing");
}

// ==========================================
// BẮT ĐẦU GAME
// ==========================================

document.getElementById("startBtn").addEventListener("click", () => {
  getAudio();

  player = document.getElementById("playerName").value.trim() || "Người chơi";

  board = Array(10).fill(5).concat([0, 0]);
  completed = Array(12).fill(false);

  score = 0;
  answeredCount = 0;
  currentPit = null;
  isSowing = false;
  hasAnswered = false;

  welcome.classList.add("hidden");
  result.classList.add("hidden");
  game.classList.remove("hidden");
  questionPanel.classList.add("hidden");

  updateBoard();
  setStatus("Mời bạn chọn một ô để bắt đầu!");
  clickSound();
});

// ==========================================
// CHỌN Ô VÀ BẮT ĐẦU RẢI QUÂN
// ==========================================

document.querySelectorAll("[data-pit]").forEach((button) => {
  button.addEventListener("click", async () => {
    const index = Number(button.dataset.pit);

    if (isSowing || hasAnswered || completed[index]) return;

    // Ô đã rỗng vẫn có thể chọn để trả lời câu hỏi.
    currentPit = index;

    if (board[index] > 0) {
      await sowFrom(index);
    } else {
      setStatus("Ô này không còn quân. Cùng trả lời câu hỏi nhé!");
      await wait(350);
    }

    openQuestion(index);
  });
});

// ==========================================
// LUẬT RẢI QUÂN A
// ==========================================

async function sowFrom(startIndex) {
  isSowing = true;
  updateBoard();

  let position = startIndex;
  let safetyCounter = 0;

  setStatus("🏮 Đang nhấc quân và bắt đầu rải...");

  // Nhấc quân khỏi ô được chọn
  let hand = board[position];
  board[position] = 0;

  updateBoard();
  animatePit(position);

  await wait(350);

  // Rải từng quân, rồi nhặt ô tiếp theo nếu còn quân.
  while (hand > 0 && safetyCounter < 500) {
    position = nextPit(position);

    board[position]++;
    hand--;
    safetyCounter++;

    animatePit(position);
    sowSound();
    updateBoard();

    await wait(180);
  }

  // Hết quân trên tay: kiểm tra ô kế tiếp.
  while (safetyCounter < 500) {
    const next = nextPit(position);

    // Nếu ô kế tiếp còn quân, nhấc lên và rải tiếp.
    if (board[next] > 0) {
      position = next;
      hand = board[position];
      board[position] = 0;

      animatePit(position);
      updateBoard();

      setStatus("🔄 Nhấc quân ở ô tiếp theo và tiếp tục rải...");
      await wait(300);

      while (hand > 0 && safetyCounter < 500) {
        position = nextPit(position);

        board[position]++;
        hand--;
        safetyCounter++;

        animatePit(position);
        sowSound();
        updateBoard();

        await wait(180);
      }

      continue;
    }

    // Nếu ô kế tiếp trống, kiểm tra ô sau nó.
    const target = nextPit(next);

    if (board[target] > 0) {
      setStatus("✨ Lượt rải đã kết thúc!");
    } else {
      setStatus("✨ Không còn quân ở các ô kế tiếp!");
    }

    break;
  }

  isSowing = false;
  updateBoard();

  await wait(450);
}

// ==========================================
// HIỆN CÂU HỎI CỦA Ô ĐÃ CHỌN
// ==========================================

function openQuestion(index) {
  hasAnswered = false;

  const isQuan = index >= 10;
  const question = isQuan ? quanQuestions[index - 10] : normalQuestions[index];

  const points = isQuan ? 20 : 8;

  questionType.textContent = isQuan
    ? `🔴 CÂU HỎI Ô QUAN ${index - 9}`
    : `🟤 CÂU HỎI Ô ${index + 1}`;

  questionPoint.textContent = `${points} ĐIỂM`;
  questionText.textContent = question.question;

  answersBox.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  continueBtn.classList.add("hidden");

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + answerIndex)}. ${answer}`;

    button.addEventListener("click", () => {
      chooseAnswer(answerIndex, question, points);
    });

    answersBox.appendChild(button);
  });

  questionPanel.classList.remove("hidden");
  questionPanel.scrollIntoView({ behavior: "smooth", block: "center" });

  setStatus("📚 Hãy chọn đáp án đúng!");
}

// ==========================================
// TRẢ LỜI
// ==========================================

function chooseAnswer(selectedIndex, question, points) {
  if (hasAnswered) return;

  hasAnswered = true;

  const isCorrect = selectedIndex === question.correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += points;
    feedback.textContent = `🎉 Chính xác! Bạn nhận được ${points} điểm.`;
    feedback.classList.add("good");
    correctSound();
  } else {
    feedback.textContent = "❌ Chưa chính xác! Câu này được 0 điểm.";
    feedback.classList.add("bad");
    wrongSound();
  }

  completed[currentPit] = true;
  answeredCount++;

  updateBoard();
  continueBtn.classList.remove("hidden");
}

// ==========================================
// TIẾP TỤC CHƠI
// ==========================================

continueBtn.addEventListener("click", () => {
  questionPanel.classList.add("hidden");

  hasAnswered = false;
  currentPit = null;

  updateBoard();

  if (answeredCount === 12) {
    showResult();
  } else {
    setStatus("Mời bạn chọn một ô chưa chơi!");
  }

  clickSound();
});

// ==========================================
// KẾT QUẢ
// ==========================================

function showResult() {
  game.classList.add("hidden");
  result.classList.remove("hidden");

  document.getElementById("resultPlayer").textContent = `Người chơi: ${player}`;
  document.getElementById("finalScore").textContent = score;

  const title = document.getElementById("resultTitle");
  const icon = document.getElementById("resultIcon");
  const message = document.getElementById("resultMessage");
  const certificateArea = document.getElementById("certificateArea");

  if (score >= 80) {
    title.textContent = "XUẤT SẮC!";
    icon.textContent = "🏆";
    message.textContent =
      "Chúc mừng bạn đã đạt từ 80 điểm trở lên! Bạn xứng đáng nhận giấy chứng nhận.";

    certificateArea.classList.remove("hidden");

    document.getElementById("certificateName").textContent = player;
    document.getElementById("certificateScore").textContent =
      `${score} / 120 ĐIỂM`;

    applause();
  } else {
    title.textContent = "CỐ GẮNG HƠN NHÉ!";
    icon.textContent = "🌱";
    message.textContent =
      "Bạn đã hoàn thành đủ 12 câu hỏi. Hãy tiếp tục khám phá những nét đẹp văn hóa Việt Nam nhé!";

    certificateArea.classList.add("hidden");
  }

  result.scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// IN GIẤY CHỨNG NHẬN
// ==========================================

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// ==========================================
// CHƠI LẠI
// ==========================================

document.getElementById("restartBtn").addEventListener("click", () => {
  result.classList.add("hidden");
  welcome.classList.remove("hidden");

  document.getElementById("playerName").value = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
  clickSound();
});
