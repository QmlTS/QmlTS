function State(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Command(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}

export class CounterViewModel {
  @State() count = 0;

  @Command()
  increment() {
    /* increment */
  }
}
