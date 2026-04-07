function State(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Command(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Effect(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}

export class LoginViewModel {
  @State() username = '';
  @State() password = '';
  @State({ readonly: true }) isLoading = false;

  @Command({ async: true })
  async login() {
    /* login logic */
  }

  @Effect()
  // biome-ignore lint/correctness/noUnusedFunctionParameters: fixture preserves effect parameter name for schema output
  readonly onLoginCompleted = (success: boolean) => {};

  onMounted() {
    /* init */
  }
}
