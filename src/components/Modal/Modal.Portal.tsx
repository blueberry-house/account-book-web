import ReactDOM from 'react-dom'

export default function ModalPortal({ children }: { children?: React.ReactNode }) {
	if (typeof window === 'undefined') return null /* for SSR */

	let container = document.getElementById('modal-root')
	if (!container) {
		container = document.createElement('div')
		container.setAttribute('id', 'modal-root')
		document.body.appendChild(container)
	}

	return ReactDOM.createPortal(children, container)
}
