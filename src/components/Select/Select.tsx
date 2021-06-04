import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import * as S from './Select.style'
import { BaseProps as OptionProps } from './Select.Option'
import useInteractOutside from '@hooks/useInteractOutside'

type Option = Pick<OptionProps, 'children' | 'value' | 'label'>

interface SelectContextType {
	selectedOption?: Option
	setSelectedOption: (option: Option) => void
}

const SelectContext = createContext({} as SelectContextType)
export const useSelectContext = () => useContext(SelectContext)

interface Props {
	placeholder?: string
	disabled?: boolean
	onChange: (value: Object) => void
}

export default function Select({
	children,
	placeholder = 'Select',
	disabled,
	onChange,
}: PropsWithChildren<Props>) {
	const selectRef = useRef<HTMLDivElement>(null)
	const [selectedOption, setSelectedOption] = useState<Option | undefined>(undefined)
	const [expanded, setExpanded] = useState(false)

	const collapse = () => {
		setExpanded(false)
	}

	const toggle = () => {
		setExpanded(e => !e)
	}

	useEffect(() => {
		if (!selectedOption) return
		onChange?.(selectedOption?.value)
		collapse()
	}, [selectedOption])

	useEffect(() => {
		collapse()
	}, [disabled])

	useInteractOutside({
		ref: selectRef,
		onInteractOutside: collapse,
	})

	return (
		<SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
			<S.Container ref={selectRef} forward={expanded} disabled={disabled}>
				<S.Button onClick={toggle}>
					<S.ButtonText dim={!selectedOption}>
						{selectedOption?.label || selectedOption?.children || placeholder}
					</S.ButtonText>
				</S.Button>
				<S.Panel visible={expanded}>{children}</S.Panel>
			</S.Container>
		</SelectContext.Provider>
	)
}
