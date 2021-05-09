import {
	forwardRef,
	PropsWithChildren,
	useImperativeHandle,
	useState,
	MouseEvent,
	useEffect,
	useRef,
} from 'react'
import ModalPortal from './Modal.Portal'
import * as S from './Modal.style'

export interface ModalProps {
	title?: string
	closeOnClickOutside?: boolean
	hasCancel?: boolean
	cancelText?: string
	onCancel?: () => void
	hasConfirm?: boolean
	confirmText?: string
	onConfirm?: () => void
}

export interface ModalActions {
	open(): void
	close(): void
}

export default forwardRef<ModalActions, PropsWithChildren<ModalProps>>((props, ref) => {
	const [visible, setVisible] = useState(false)

	const open = () => setVisible(true)
	const close = () => setVisible(false)
	useImperativeHandle(ref, () => ({ open, close }))

	return (
		<ModalPortal>
			{visible && (
				<Modal open={open} close={close} {...props}>
					{props.children}
				</Modal>
			)}
		</ModalPortal>
	)
})

function Modal({ children, open, close, ...props }: PropsWithChildren<ModalProps & ModalActions>) {
	const {
		title,
		closeOnClickOutside = true,
		hasCancel,
		cancelText = '취소',
		onCancel,
		hasConfirm,
		confirmText = '확인',
		onConfirm,
	} = props

	const handleCancel = () => {
		onCancel?.()
		close()
	}

	const handleConfirm = () => {
		onConfirm?.()
		close()
	}

	const handleClickOutside = (e: MouseEvent) => {
		if (!closeOnClickOutside) return
		if (e.target === e.currentTarget) handleCancel()
	}

	// prevent scroll of body when modal is visible
	useEffect(() => {
		const savedBodyOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = savedBodyOverflow
		}
	}, [])

	// focus modal when modal is visible
	const modal = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const savedActiveElement = document.activeElement as HTMLElement
		modal.current?.focus()
		return () => {
			savedActiveElement?.focus()
		}
	}, [])

	// add listener on keyboard events
	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') handleCancel()
			if (e.key === 'Enter') handleConfirm()
		}
		window.addEventListener('keydown', handleKeydown)
		return () => {
			window.removeEventListener('keydown', handleKeydown)
		}
	}, [])

	return (
		<S.Container onClick={handleClickOutside}>
			<S.Modal ref={modal} tabIndex={1}>
				{title && <S.ModalHeader>{title}</S.ModalHeader>}
				{children && (
					<S.ModalBody>
						<S.ModalBodyScroller>{children}</S.ModalBodyScroller>
					</S.ModalBody>
				)}
				<S.ModalFooter>
					{hasCancel && <S.ModalButton onClick={handleCancel}>{cancelText}</S.ModalButton>}
					{hasConfirm && <S.ModalButton onClick={handleConfirm}>{confirmText}</S.ModalButton>}
				</S.ModalFooter>
			</S.Modal>
		</S.Container>
	)
}
