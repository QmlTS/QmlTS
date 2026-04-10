import type { CounterViewModel } from './CounterViewModel.js';
import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';
import { Text } from './dsl/generated/QtQuick/Text.js';

export default function CounterView(vm: CounterViewModel) {
  return Rectangle().width(200).height(100).children(Text().text(vm.count));
}
