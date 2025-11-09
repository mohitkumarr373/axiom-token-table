import { Token } from '../../entities/token/types';

export function startWsMock(onUpdate: (tks: Partial<Token>[]) => void) {
  let timer: NodeJS.Timeout;
  function tick() {
    onUpdate([{ id: "1", price: Math.random() * 2 + 0.9 }]);
    timer = setTimeout(tick, Math.random() * 1000 + 1000);
  }
  tick();
  return () => clearTimeout(timer);
}
