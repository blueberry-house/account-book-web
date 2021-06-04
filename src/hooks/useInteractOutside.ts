import { RefObject, useEffect } from 'react'

interface Props {
	ref: RefObject<Node>
	excludedRefs?: RefObject<Node>[]
	onInteractOutside: () => void
}

export default function useInteractOutside(props: Props) {
	const { ref, excludedRefs, onInteractOutside } = props

	const handleWindowClick = (e: MouseEvent) => {
		if (!ref.current) return
		const target = e.target as Node
		if (ref.current.contains(target)) return
		if (excludedRefs?.some(ref => ref.current?.contains(target))) return
		onInteractOutside()
	}

	useEffect(() => {
		window.addEventListener('click', handleWindowClick)
		return () => window.removeEventListener('click', handleWindowClick)
	}, [props])
}
