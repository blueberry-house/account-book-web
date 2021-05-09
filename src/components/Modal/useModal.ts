import { createRef, RefObject, useEffect, useState } from 'react'
import { ModalActions } from './Modal'

const initialController: ModalActions = {
	open: () => Error('알 수 없는 모달입니다.'),
	close: () => Error('알 수 없는 모달입니다.'),
}

export default function useModal(): [ModalActions, RefObject<ModalActions>] {
	const [actions, setActions] = useState<ModalActions>(initialController)

	const ref = createRef<ModalActions>()
	useEffect(() => {
		if (!ref.current) return
		setActions(ref.current)
	}, [ref.current])

	return [actions, ref]
}
