function State() {
	return (t: any, c: any) => {};
}

export class CounterViewModel {
	@State() count = 0;
}
