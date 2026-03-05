import '@testing-library/jest-dom';
import { vi, afterEach } from 'vitest';

// ── IntersectionObserver ──────────────────────────────────────────────────────
// useReveal depende de IntersectionObserver; JSDOM não o implementa.
const IntersectionObserverMock = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// ── scrollIntoView ────────────────────────────────────────────────────────────
// Navbar.handleScroll e outros usam element.scrollIntoView()
Element.prototype.scrollIntoView = vi.fn();

// ── window.scrollTo ───────────────────────────────────────────────────────────
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });

// ── history.pushState ─────────────────────────────────────────────────────────
Object.defineProperty(window.history, 'pushState', {
  value: vi.fn(),
  writable: true,
  configurable: true,
});

// ── window.alert ──────────────────────────────────────────────────────────────
// Pricing.tsx chama alert() no CTA; evita janela real nos testes
vi.stubGlobal('alert', vi.fn());

// ── matchMedia ────────────────────────────────────────────────────────────────
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// ── requestAnimationFrame ─────────────────────────────────────────────────────
// useCounter usa rAF para a animação de contagem. Implementamos via setTimeout
// para que vi.useFakeTimers() possa controlar o tempo nos testes específicos.
vi.stubGlobal(
  'requestAnimationFrame',
  vi.fn((cb: FrameRequestCallback): number =>
    window.setTimeout(() => cb(performance.now()), 16) as unknown as number,
  ),
);
vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number): void => {
  window.clearTimeout(id);
}));

// ── ResizeObserver ────────────────────────────────────────────────────────────
vi.stubGlobal('ResizeObserver', vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})));

// ── Limpeza entre testes ──────────────────────────────────────────────────────
afterEach(() => {
  vi.clearAllMocks();
});
