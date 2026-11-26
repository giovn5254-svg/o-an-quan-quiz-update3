// ==========================================
// GAME O AN QUAN - 36 CAU HOI
// VAN 1: CAU HOI SO 1 CUA MOI O
// VAN 2: CAU HOI SO 2 CUA MOI O
// VAN 3: CAU HOI SO 3 CUA MOI O
// DIEM MOI VAN DOC LAP, KHONG CONG DON
// ==========================================

const pitData = [
  {
    name: "Ô THƯỜNG 1 – ỨNG XỬ Ở TRƯỜNG HỌC",
    isQuan: false,
    questions: [
      {
        question: "Trong giờ ra chơi, em thấy một bạn mới chuyển trường ngồi một mình. Em nên làm gì?",
        answers: [
          "Chủ động chào hỏi, trò chuyện và giới thiệu bạn với các bạn khác.",
          "Đứng nhìn vì nghĩ bạn phải tự làm quen.",
          "Trêu bạn vì bạn ít nói."
        ],
        correct: 0
      },
      {
        question: "Một bạn bị chế giễu vì phát âm chưa chuẩn khi thuyết trình. Em nên làm gì?",
        answers: [
          "Cười theo để hòa đồng.",
          "Không hùa theo, động viên và góp ý riêng tế nhị nếu cần.",
          "Quay video đăng lên nhóm lớp."
        ],
        correct: 1
      },
      {
        question: "Em phát hiện bạn thân sử dụng tài liệu trong giờ kiểm tra. Cách xử lý phù hợp nhất?",
        answers: [
          "Che giấu vì là bạn thân.",
          "Đăng sự việc lên mạng xã hội.",
          "Khuyên bạn dừng lại, trung thực và trao đổi với giáo viên khi cần."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 2 – ỨNG XỬ TRONG GIA ĐÌNH",
    isQuan: false,
    questions: [
      {
        question: "Người thân góp ý em sử dụng điện thoại quá nhiều trong bữa cơm. Em nên làm gì?",
        answers: [
          "Lắng nghe, trao đổi bình tĩnh và điều chỉnh thời gian sử dụng.",
          "Bỏ ăn và lớn tiếng phản ứng.",
          "Im lặng nhưng tiếp tục dùng điện thoại."
        ],
        correct: 0
      },
      {
        question: "Em bất đồng với cha mẹ về việc chọn ngành học. Cách ứng xử phù hợp?",
        answers: [
          "Nói cha mẹ không hiểu gì về mình.",
          "Trình bày nguyện vọng, lắng nghe và cùng tìm hiểu thông tin.",
          "Nhờ người khác nói dối để cha mẹ đồng ý."
        ],
        correct: 1
      },
      {
        question: "Em vô ý làm hỏng một vật dụng trong nhà. Em nên làm gì?",
        answers: [
          "Giấu đi.",
          "Đổ lỗi cho người khác.",
          "Thành thật nhận lỗi, xin lỗi và cùng gia đình khắc phục."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 3 – ỨNG XỬ NƠI CÔNG CỘNG",
    isQuan: false,
    questions: [
      {
        question: "Khi thấy một người chen hàng, em nên làm gì?",
        answers: [
          "Nhắc nhở lịch sự, đề nghị mọi người giữ trật tự.",
          "Chen lên theo.",
          "To tiếng, xúc phạm người đó."
        ],
        correct: 0
      },
      {
        question: "Trên xe buýt, em thấy người lớn tuổi phải đứng. Em nên làm gì?",
        answers: [
          "Giả vờ ngủ.",
          "Chủ động nhường ghế nếu điều kiện cho phép.",
          "Quay video đăng mạng."
        ],
        correct: 1
      },
      {
        question: "Sau khi ăn uống ở công viên, nhóm em còn nhiều rác. Em nên làm gì?",
        answers: [
          "Để rác cạnh ghế.",
          "Giấu rác vào bụi cây.",
          "Thu gom và bỏ rác đúng nơi quy định."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 4 – ỨNG XỬ KHI THAM GIA LỄ HỘI",
    isQuan: false,
    questions: [
      {
        question: "Khi tham gia lễ hội đông người, em nên làm gì?",
        answers: [
          "Chen lấn để đến gần sân khấu.",
          "Tuân thủ hướng dẫn, xếp hàng và giữ vệ sinh.",
          "Vượt rào để chụp ảnh."
        ],
        correct: 1
      },
      {
        question: "Em chưa hiểu ý nghĩa một nghi thức tại lễ hội. Em nên làm gì?",
        answers: [
          "Tìm hiểu từ người tổ chức hoặc nguồn đáng tin cậy, giữ thái độ tôn trọng.",
          "Bình luận nghi thức đó lạc hậu.",
          "Bắt chước nghi thức để gây cười."
        ],
        correct: 0
      },
      {
        question: "Muốn quay video biểu diễn tại lễ hội, em nên làm gì?",
        answers: [
          "Đứng chắn lối đi.",
          "Bật flash liên tục.",
          "Quay ở vị trí được phép, không cản trở và tuân thủ quy định."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 5 – ỨNG XỬ KHI DU LỊCH, THAM QUAN",
    isQuan: false,
    questions: [
      {
        question: "Tại di tích có biển yêu cầu không chạm vào hiện vật. Em nên làm gì?",
        answers: [
          "Tuân thủ hướng dẫn, quan sát từ khoảng cách quy định.",
          "Chạm thử để cảm nhận.",
          "Dịch chuyển hiện vật để chụp ảnh."
        ],
        correct: 0
      },
      {
        question: "Bạn định khắc tên lên thân cây trong khu du lịch. Em nên làm gì?",
        answers: [
          "Mặc kệ.",
          "Ngăn bạn, giải thích tác hại và nhắc giữ gìn cảnh quan.",
          "Cùng khắc tên."
        ],
        correct: 1
      },
      {
        question: "Đến bản làng có quy định về trang phục và chụp ảnh, em nên làm gì?",
        answers: [
          "Tự ý chụp người dân.",
          "Bỏ qua quy định.",
          "Tìm hiểu, tôn trọng quy định và xin phép trước khi chụp."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 6 – GIAO TIẾP VỚI NGƯỜI NƯỚC NGOÀI",
    isQuan: false,
    questions: [
      {
        question: "Du khách nước ngoài hỏi đường nhưng em không giỏi ngoại ngữ. Em nên làm gì?",
        answers: [
          "Dùng từ đơn giản, bản đồ hoặc công cụ dịch để hỗ trợ; nếu chưa rõ thì chỉ nơi có thể giúp.",
          "Bịa đường đi.",
          "Phớt lờ dù có thể hỗ trợ."
        ],
        correct: 0
      },
      {
        question: "Người nước ngoài phát âm sai tên một địa danh Việt Nam. Em nên làm gì?",
        answers: [
          "Cười chê.",
          "Nhẹ nhàng hướng dẫn cách phát âm đúng.",
          "Bắt chước để trêu đùa."
        ],
        correct: 1
      },
      {
        question: "Du khách hỏi về phong tục mà em chưa biết rõ. Em nên trả lời thế nào?",
        answers: [
          "Tự nghĩ câu trả lời.",
          "Khẳng định thông tin nghe kể nhưng chưa kiểm chứng.",
          "Thành thật nói chưa rõ và đề nghị cùng tìm nguồn đáng tin cậy."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 7 – ỨNG XỬ TRÊN KHÔNG GIAN MẠNG",
    isQuan: false,
    questions: [
      {
        question: "Em nhận bài đăng xúc phạm một cộng đồng văn hóa nhưng chưa rõ đúng sai. Em nên làm gì?",
        answers: [
          "Không chia sẻ; kiểm tra nguồn và báo cáo nội dung vi phạm nếu cần.",
          "Chia sẻ ngay.",
          "Bình luận xúc phạm lại."
        ],
        correct: 0
      },
      {
        question: "Bạn đăng ảnh của em lên mạng khi chưa xin phép. Em nên làm gì?",
        answers: [
          "Công khai thông tin cá nhân của bạn để trả đũa.",
          "Trao đổi riêng, đề nghị gỡ ảnh hoặc xin phép trước khi đăng.",
          "Tạo tài khoản giả để công kích."
        ],
        correct: 1
      },
      {
        question: "Trong nhóm chat có người miệt thị phong tục địa phương khác. Em nên làm gì?",
        answers: [
          "Thả biểu tượng cười.",
          "Chuyển tiếp sang nhóm khác.",
          "Góp ý tôn trọng, không lan truyền và báo quản trị viên nếu cần."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 8 – GÌN GIỮ VÀ LAN TỎA DI SẢN",
    isQuan: false,
    questions: [
      {
        question: "Em thấy có người vẽ bậy lên tường di tích. Em nên làm gì?",
        answers: [
          "Nhắc nhở phù hợp và báo người quản lý di tích.",
          "Vẽ thêm.",
          "Chụp ảnh cổ vũ."
        ],
        correct: 0
      },
      {
        question: "Em muốn giới thiệu dân ca địa phương trên mạng. Cách làm phù hợp?",
        answers: [
          "Đăng thông tin chưa kiểm chứng.",
          "Tìm nguồn đáng tin cậy, ghi rõ xuất xứ và giới thiệu trân trọng.",
          "Chỉnh sửa tùy ý rồi nói là bản gốc."
        ],
        correct: 1
      },
      {
        question: "Bạn cho rằng nghề thủ công truyền thống không còn giá trị vì máy móc làm nhanh hơn. Em nên phản hồi?",
        answers: [
          "Chê bai ý kiến của bạn.",
          "Nói mọi sản phẩm thủ công đều tốt hơn công nghiệp.",
          "Giải thích giá trị kỹ thuật, tri thức, bản sắc và sinh kế cộng đồng của nghề truyền thống."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 9 – TRÁCH NHIỆM VĂN HÓA KHI THAM QUAN",
    isQuan: false,
    questions: [
      {
        question: "Du khách vô tình chạm vào hiện vật; nhóm học sinh quay video định đăng để chế giễu. Em xử lý thế nào?",
        answers: [
          "Nhắc du khách lịch sự về quy định; đề nghị nhóm không chế giễu, không phát tán video và báo người phụ trách nếu cần.",
          "Đăng video để nhiều người biết.",
          "Lớn tiếng chỉ trích du khách trước đám đông."
        ],
        correct: 0
      },
      {
        question: "Trong buổi giao lưu, một bạn gọi phong tục dân tộc khác là 'kỳ lạ, lạc hậu'. Cách ứng xử phù hợp?",
        answers: [
          "Đồng tình cho xong chuyện.",
          "Bình tĩnh đề nghị dùng ngôn ngữ tôn trọng; giải thích cần tìm hiểu phong tục trong bối cảnh lịch sử, cộng đồng.",
          "Đáp trả bằng lời xúc phạm."
        ],
        correct: 1
      },
      {
        question: "Video về lễ hội địa phương đưa tin gây sốc nhưng không dẫn nguồn, đang được chia sẻ rộng rãi. Em nên làm gì?",
        answers: [
          "Chia sẻ kèm cảnh báo dù chưa kiểm chứng.",
          "Tin video vì có nhiều lượt xem.",
          "Đối chiếu nguồn chính thức, người am hiểu và cộng đồng; chỉ chia sẻ thông tin có căn cứ, nêu rõ điều chưa xác minh."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô THƯỜNG 10 – BẢO TỒN VÀ LAN TỎA DI SẢN VĂN HÓA",
    isQuan: false,
    questions: [
      {
        question: "Ở làng nghề, bạn tự ý cầm sản phẩm trưng bày để chụp ảnh, khiến sản phẩm có nguy cơ rơi vỡ. Em nên làm gì?",
        answers: [
          "Đề nghị bạn đặt lại, xin lỗi nghệ nhân và hỏi trước khi cầm/chụp; giải thích sản phẩm gắn với công sức, tri thức nghề.",
          "Cứ chụp xong rồi tính.",
          "Mang sản phẩm đi nơi khác để có phông nền đẹp."
        ],
        correct: 0
      },
      {
        question: "Nhóm muốn làm video quảng bá nghi lễ truyền thống ít người thực hành. Phương án có trách nhiệm nhất?",
        answers: [
          "Tự thay đổi nghi lễ cho hấp dẫn, không cần hỏi ai.",
          "Trao đổi với người thực hành và cộng đồng chủ thể; tôn trọng phần cốt lõi, xin phép ghi hình và giới thiệu đúng bối cảnh.",
          "Dàn dựng rồi giới thiệu là nghi thức nguyên bản."
        ],
        correct: 1
      },
      {
        question: "Hai trang mạng đưa thông tin khác nhau về nguồn gốc di sản. Nhóm cần viết nội dung giới thiệu. Cách làm đáng tin cậy nhất?",
        answers: [
          "Chọn trang có hình ảnh đẹp hơn.",
          "Chọn thông tin được chia sẻ nhiều hơn.",
          "Đối chiếu tài liệu chính thống, nghiên cứu chuyên môn và ý kiến cộng đồng; ghi nhận điểm còn tranh luận, không khẳng định quá mức."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô QUAN 1 – TÌNH HUỐNG NÂNG CAO VỀ TRÁCH NHIỆM VĂN HÓA",
    isQuan: true,
    questions: [
      {
        question: "Du khách vô tình chạm vào hiện vật; nhóm học sinh quay video định đăng để chế giễu. Em xử lý thế nào?",
        answers: [
          "Nhắc du khách lịch sự về quy định; đề nghị nhóm không chế giễu, không phát tán video và báo người phụ trách nếu cần.",
          "Đăng video để nhiều người biết.",
          "Lớn tiếng chỉ trích du khách trước đám đông."
        ],
        correct: 0
      },
      {
        question: "Trong buổi giao lưu, một bạn gọi phong tục dân tộc khác là 'kỳ lạ, lạc hậu'. Cách ứng xử phù hợp?",
        answers: [
          "Đồng tình cho xong chuyện.",
          "Bình tĩnh đề nghị dùng ngôn ngữ tôn trọng; giải thích cần tìm hiểu phong tục trong bối cảnh lịch sử, cộng đồng.",
          "Đáp trả bằng lời xúc phạm."
        ],
        correct: 1
      },
      {
        question: "Video về lễ hội địa phương đưa tin gây sốc nhưng không dẫn nguồn, đang được chia sẻ rộng rãi. Em nên làm gì?",
        answers: [
          "Chia sẻ kèm cảnh báo dù chưa kiểm chứng.",
          "Tin video vì có nhiều lượt xem.",
          "Đối chiếu nguồn chính thức, người am hiểu và cộng đồng; chỉ chia sẻ thông tin có căn cứ, nêu rõ điều chưa xác minh."
        ],
        correct: 2
      }
    ]
  },
  {
    name: "Ô QUAN 2 – TÌNH HUỐNG NÂNG CAO VỀ BẢO TỒN DI SẢN",
    isQuan: true,
    questions: [
      {
        question: "Ở làng nghề, bạn tự ý cầm sản phẩm trưng bày để chụp ảnh, khiến sản phẩm có nguy cơ rơi vỡ. Em nên làm gì?",
        answers: [
          "Đề nghị bạn đặt lại, xin lỗi nghệ nhân và hỏi trước khi cầm/chụp; giải thích sản phẩm gắn với công sức, tri thức nghề.",
          "Cứ chụp xong rồi tính.",
          "Mang sản phẩm đi nơi khác để có phông nền đẹp."
        ],
        correct: 0
      },
      {
        question: "Nhóm muốn làm video quảng bá nghi lễ truyền thống ít người thực hành. Phương án có trách nhiệm nhất?",
        answers: [
          "Tự thay đổi nghi lễ cho hấp dẫn, không cần hỏi ai.",
          "Trao đổi với người thực hành và cộng đồng chủ thể; tôn trọng phần cốt lõi, xin phép ghi hình và giới thiệu đúng bối cảnh.",
          "Dàn dựng rồi giới thiệu là nghi thức nguyên bản."
        ],
        correct: 1
      },
      {
        question: "Hai trang mạng đưa thông tin khác nhau về nguồn gốc di sản. Nhóm cần viết nội dung giới thiệu. Cách làm đáng tin cậy nhất?",
        answers: [
          "Chọn trang có hình ảnh đẹp hơn.",
          "Chọn thông tin được chia sẻ nhiều hơn.",
          "Đối chiếu tài liệu chính thống, nghiên cứu chuyên môn và ý kiến cộng đồng; ghi nhận điểm còn tranh luận, không khẳng định quá mức."
        ],
        correct: 2
      }
    ]
  }
];

// ==========================================
// TRẠNG THÁI GAME
// ==========================================

let board = Array(10).fill(5).concat([0, 0]);
let completed = Array(12).fill(false);
let roundNumber = 1;
let roundScores = [null, null, null];
let score = 0;
let answeredCount = 0;
let player = "Người chơi";
let currentPit = null;
let isSowing = false;
let hasAnswered = false;
let audioContext = null;

// ==========================================
// LẤY PHẦN TỬ HTML
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
const nextRoundBtn = document.getElementById("nextRoundBtn");

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
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + duration
  );

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
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      start + duration
    );

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
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Rải ngược chiều kim đồng hồ
function nextPit(index) {
  return (index - 1 + 12) % 12;
}

function updateBoard() {
  document.querySelectorAll("[data-pit]").forEach(button => {
    const index = Number(button.dataset.pit);

    button.querySelector(".stones").textContent =
      `${board[index]} quân`;

    button.classList.toggle("pit-done", completed[index]);

    button.disabled =
      completed[index] || isSowing || hasAnswered;
  });

  document.getElementById("score").textContent = score;
  document.getElementById("progress").textContent =
    `${answeredCount}/12`;

  document.getElementById("roundEyebrow").textContent =
    `VÁN ${roundNumber} / 3`;
}

function setStatus(message) {
  document.getElementById("gameStatus").textContent = message;
}

function animatePit(index) {
  const button = document.querySelector(
    `[data-pit="${index}"]`
  );

  if (!button) return;

  button.classList.remove("sowing");
  void button.offsetWidth;
  button.classList.add("sowing");
}

// ==========================================
// BẮT ĐẦU / RESET MỘT VÁN
// ==========================================

function resetCurrentRound() {
  board = Array(10).fill(5).concat([0, 0]);
  completed = Array(12).fill(false);

  // Reset điểm khi bắt đầu ván mới
  score = 0;
  answeredCount = 0;

  currentPit = null;
  isSowing = false;
  hasAnswered = false;

  questionPanel.classList.add("hidden");

  updateBoard();

  setStatus(
    `Mời bạn chọn một ô để bắt đầu VÁN ${roundNumber}!`
  );
}

document.getElementById("startBtn").addEventListener("click", () => {
  getAudio();

  player =
    document.getElementById("playerName").value.trim() ||
    "Người chơi";

  roundNumber = 1;

  // Lưu điểm từng ván riêng biệt
  roundScores = [null, null, null];

  welcome.classList.add("hidden");
  result.classList.add("hidden");
  game.classList.remove("hidden");

  resetCurrentRound();
  clickSound();
});

// ==========================================
// CHỌN Ô VÀ RẢI QUÂN
// ==========================================

document.querySelectorAll("[data-pit]").forEach(button => {
  button.addEventListener("click", async () => {
    const index = Number(button.dataset.pit);

    if (isSowing || hasAnswered || completed[index]) {
      return;
    }

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

  let hand = board[position];

  board[position] = 0;
  updateBoard();

  animatePit(position);
  await wait(350);

  // Rải hết quân đang cầm
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

  // Nếu ô tiếp theo còn quân thì nhấc lên và rải tiếp
  while (safetyCounter < 500) {
    const next = nextPit(position);

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

    const target = nextPit(next);

    setStatus(
      board[target] > 0
        ? "✨ Lượt rải đã kết thúc!"
        : "✨ Không còn quân ở các ô kế tiếp!"
    );

    break;
  }

  isSowing = false;
  updateBoard();

  await wait(450);
}

// ==========================================
// MỞ CÂU HỎI THEO SỐ VÁN
// ==========================================

function openQuestion(index) {
  hasAnswered = false;

  // VÁN 1 = questions[0]
  // VÁN 2 = questions[1]
  // VÁN 3 = questions[2]
  const questionIndex = roundNumber - 1;

  const pit = pitData[index];
  const question = pit.questions[questionIndex];

  const points = pit.isQuan ? 20 : 8;

  questionType.textContent =
    `${pit.isQuan ? "🔴" : "🟤"} ${pit.name} - CÂU ${roundNumber}/3`;

  questionPoint.textContent = `${points} ĐIỂM`;
  questionText.textContent = question.question;

  answersBox.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";

  continueBtn.classList.add("hidden");

  // Tạo bản sao đáp án kèm vị trí gốc
  const shuffledAnswers = question.answers.map(
    (answer, originalIndex) => ({
      answer,
      originalIndex
    })
  );

  // Xáo trộn ngẫu nhiên 3 đáp án
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledAnswers[i], shuffledAnswers[j]] =
      [shuffledAnswers[j], shuffledAnswers[i]];
  }

  // Xác định vị trí mới của đáp án đúng
  const correctDisplayIndex = shuffledAnswers.findIndex(
    item => item.originalIndex === question.correct
  );

  // Hiển thị đáp án đã xáo trộn
  shuffledAnswers.forEach((item, displayIndex) => {
    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent =
      `${String.fromCharCode(65 + displayIndex)}. ${item.answer}`;

    button.addEventListener("click", () => {
      chooseAnswer(
        item.originalIndex,
        question,
        points,
        displayIndex,
        correctDisplayIndex
      );
    });

    answersBox.appendChild(button);
  });

  questionPanel.classList.remove("hidden");

  questionPanel.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  setStatus("📚 Hãy chọn đáp án đúng!");
}

// ==========================================
// TRẢ LỜI VÀ TÍNH ĐIỂM
// ==========================================

function chooseAnswer(
  selectedOriginalIndex,
  question,
  points,
  selectedDisplayIndex,
  correctDisplayIndex
) {
  if (hasAnswered) return;

  hasAnswered = true;

  const isCorrect =
    selectedOriginalIndex === question.correct;

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;

    // Đánh dấu đáp án đúng theo vị trí đã xáo trộn
    if (index === correctDisplayIndex) {
      button.classList.add("correct");
    }

    // Đánh dấu đáp án người chơi chọn sai
    if (index === selectedDisplayIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += points;

    feedback.textContent =
      `🎉 Chính xác! Bạn nhận được ${points} điểm trong VÁN ${roundNumber}.`;

    feedback.classList.add("good");
    correctSound();
  } else {
    feedback.textContent =
      "❌ Chưa chính xác! Câu này được 0 điểm.";

    feedback.classList.add("bad");
    wrongSound();
  }

  completed[currentPit] = true;
  answeredCount++;

  updateBoard();

  continueBtn.classList.remove("hidden");
}

// ==========================================
// TIẾP TỤC SAU KHI TRẢ LỜI
// ==========================================

continueBtn.addEventListener("click", () => {
  questionPanel.classList.add("hidden");

  hasAnswered = false;
  currentPit = null;

  updateBoard();

  if (answeredCount === 12) {
    // Lưu điểm của riêng ván hiện tại
    roundScores[roundNumber - 1] = score;

    showRoundResult();
  } else {
    setStatus(
      `Mời bạn chọn một ô chưa chơi ở VÁN ${roundNumber}!`
    );
  }

  clickSound();
});

// ==========================================
// HIỆN LỊCH SỬ ĐIỂM TỪNG VÁN
// KHÔNG CỘNG ĐIỂM CÁC VÁN
// ==========================================

function renderRoundHistory() {
  const history = document.getElementById("roundHistory");

  history.innerHTML = "";

  roundScores.forEach((roundScore, index) => {
    const row = document.createElement("div");
    row.className = "round-row";

    const label = document.createElement("span");
    label.textContent = `Ván ${index + 1}`;

    const value = document.createElement("strong");

    if (roundScore === null) {
      value.textContent = "Chưa chơi";
    } else {
      value.textContent = `${roundScore} / 120 điểm`;

      const status = document.createElement("span");

      status.className =
        roundScore >= 80 ? "passed" : "not-passed";

      status.textContent =
        roundScore >= 80
          ? "  • Đạt mốc 80"
          : "  • Chưa đạt mốc 80";

      value.appendChild(status);
    }

    row.append(label, value);
    history.appendChild(row);
  });
}

// ==========================================
// KẾT QUẢ RIÊNG CỦA MỘT VÁN
// ==========================================

function showRoundResult() {
  game.classList.add("hidden");
  result.classList.remove("hidden");

  const passed = score >= 80;

  document.getElementById("resultRoundLabel").textContent =
    `KẾT QUẢ VÁN ${roundNumber} / 3`;

  document.getElementById("resultPlayer").textContent =
    `Người chơi: ${player}`;

  // Chỉ hiển thị điểm của ván vừa hoàn thành
  document.getElementById("finalScore").textContent = score;

  const title = document.getElementById("resultTitle");
  const icon = document.getElementById("resultIcon");
  const message = document.getElementById("resultMessage");
  const certificateArea =
    document.getElementById("certificateArea");

  if (passed) {
    title.textContent = "XUẤT SẮC!";
    icon.textContent = "🏆";

    message.textContent =
      `Bạn đạt ${score}/120 điểm ở VÁN ${roundNumber}, đủ điều kiện nhận giấy chứng nhận của riêng ván này!`;

    certificateArea.classList.remove("hidden");

    document.getElementById("certificateName").textContent =
      player;

    document.getElementById("certificateScore").textContent =
      `VÁN ${roundNumber}: ${score} / 120 ĐIỂM`;

    applause();
  } else {
    title.textContent = "CỐ GẮNG HƠN NHÉ!";
    icon.textContent = "🌱";

    message.textContent =
      `Bạn hoàn thành VÁN ${roundNumber} với ${score}/120 điểm. Mốc nhận giấy chứng nhận là 80 điểm trong chính ván này.`;

    certificateArea.classList.add("hidden");
  }

  renderRoundHistory();

  if (roundNumber < 3) {
    nextRoundBtn.classList.remove("hidden");

    nextRoundBtn.textContent =
      `➡️ SANG VÁN ${roundNumber + 1}`;
  } else {
    nextRoundBtn.classList.add("hidden");

    message.textContent +=
      " Bạn đã hoàn thành cả 3 ván. Điểm từng ván được lưu riêng, không cộng lại.";
  }

  result.scrollIntoView({
    behavior: "smooth"
  });
}

// ==========================================
// SANG VÁN TIẾP THEO
// ==========================================

nextRoundBtn.addEventListener("click", () => {
  if (roundNumber >= 3) return;

  roundNumber++;

  result.classList.add("hidden");
  game.classList.remove("hidden");

  // Reset bảng và điểm cho ván mới
  resetCurrentRound();

  clickSound();
});

// ==========================================
// IN GIẤY CHỨNG NHẬN
// ==========================================

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// ==========================================
// CHƠI LẠI TỪ ĐẦU
// ==========================================

document.getElementById("restartBtn").addEventListener("click", () => {
  result.classList.add("hidden");
  game.classList.add("hidden");
  welcome.classList.remove("hidden");

  document.getElementById("playerName").value = "";

  roundNumber = 1;
  roundScores = [null, null, null];

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  clickSound();
});
