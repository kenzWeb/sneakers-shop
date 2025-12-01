export default function confetti() {
  const colors = ['#00f0ff', '#a855f7', '#ff00ff'];
  const particles = 50;

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${50 + (Math.random() - 0.5) * 20}%;
      top: 50%;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 10 + Math.random() * 20;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 20;
    let x = 0;
    let y = 0;
    let opacity = 1;

    const animate = () => {
      x += vx;
      y += vy + 0.5;
      opacity -= 0.02;
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = String(opacity);

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };

    setTimeout(() => requestAnimationFrame(animate), i * 20);
  }
}
