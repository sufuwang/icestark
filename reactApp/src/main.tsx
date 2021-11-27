import React from 'react'
import ReactDOM from 'react-dom'
import { isInIcestark, setLibraryName } from '@ice/stark-app'
import App from './index'

export function mount(props: any) {
  ReactDOM.render(<App />, props.container)
}

export function unmount(props: any) {
  ReactDOM.unmountComponentAtNode(props.container)
}

setLibraryName('react-app')

if (!isInIcestark()) {
  ReactDOM.render(<App />, document.getElementById('ice-container'))
}
