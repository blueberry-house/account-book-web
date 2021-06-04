import { useEffect } from 'react'
import { useSelectContext } from './Select'
import * as S from './Select.style'

export interface BaseProps {
	children: React.ReactNode
	value: Object
	label?: string
}

interface EnabledProps extends BaseProps {
	disabled?: false
	selected?: boolean
}

interface DisabledProps extends BaseProps {
	disabled: true
	selected?: false
}

type Props = EnabledProps | DisabledProps

export default function Option({ children, value, label, disabled, selected }: Props) {
	const { selectedOption, setSelectedOption } = useSelectContext()

	const handleClick = () => {
		setSelectedOption({
			children,
			value,
			label,
		})
	}

	useEffect(() => {
		if (selected) handleClick()
	}, [selected])

	return (
		<S.Option selected={selectedOption?.value === value} disabled={disabled} onClick={handleClick}>
			{children}
		</S.Option>
	)
}
