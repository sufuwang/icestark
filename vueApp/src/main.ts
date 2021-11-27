import { createApp } from 'vue';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';
import App from './index/index.vue';
import './global.less'

let vue: any;

setLibraryName('vue-app');

interface TypeMountArgs {
  container: HTMLDivElement
}

export function mount({ container }: TypeMountArgs) {
  container.setAttribute('class', 'vue-root')
  vue = createApp(App);
  vue.mount(container);
}

export function unmount() {
  vue.unmount();
}

if (!isInIcestark()) {
  createApp(App).mount('#app');
}
