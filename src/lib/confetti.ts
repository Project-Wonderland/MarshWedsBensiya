import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  // Center blast
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.65 },
    colors: ["#C5A059", "#D8B767", "#132E22", "#E5CD8B", "#FDFBF7", "#E07A5F"],
  });

  // Left cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#C5A059", "#E5CD8B", "#AA8440", "#ffffff"],
    });
  }, 200);

  // Right cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#C5A059", "#E5CD8B", "#AA8440", "#ffffff"],
    });
  }, 400);
};

export const triggerGoldenShower = () => {
  const end = Date.now() + 1500;
  const colors = ["#C5A059", "#E5CD8B", "#D8B767", "#FFFFFF", "#1E4D3A"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
