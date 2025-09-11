export function throttle(fn: (...args: unknown[]) => void, delay: number) {
       let lastCall = 0;

       return function (...args: unknown[]) {
              const now = Date.now();
              if (now - lastCall >= delay) {
                     fn(...args);
                     lastCall = now;
              }
       };
}