import { Column } from './dsl/generated/QtQuick/Column.js';
import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';
import { Text } from './dsl/generated/QtQuick/Text.js';
import type { LoginViewModel } from './LoginViewModel.js';

export default function LoginView(vm: LoginViewModel) {
  return Rectangle()
    .width(400)
    .height(300)
    .children(
      Column().children(
        Text().text(vm.username),
        Text().text(vm.password),
        Text().text(vm.isLoading),
      ),
    );
}
