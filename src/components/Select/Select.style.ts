import styled, { css } from 'styled-components'

export const Container = styled.div<{ forward: boolean; disabled?: boolean }>`
	position: relative;
	${({ forward }) =>
		forward &&
		css`
			z-index: 1;
		`}
	${({ disabled }) =>
		disabled &&
		css`
			background: #eee;
			pointer-events: none;
		`}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 50px;
`

export const ButtonText = styled.span<{ dim: boolean }>`
	${({ dim }) =>
		dim &&
		css`
			color: rgba(0, 0, 0, 0.3);
		`}
`

export const Panel = styled.div<{ visible: boolean }>`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: #fff;
	opacity: 0;
	transform: translateY(-10px);
	transition: all 0.3s ease-in-out;
	pointer-events: none;
	${({ visible }) =>
		visible &&
		css`
			opacity: 1;
			transform: translateY(0);
			pointer-events: initial;
		`}
`

export const Option = styled.button<{ selected?: boolean; disabled?: boolean }>`
	display: block;
	width: 100%;
	text-align: left;
	${({ selected }) =>
		selected &&
		css`
			color: blue;
		`}
	${({ disabled }) =>
		disabled &&
		css`
			background: #eee;
			pointer-events: none;
		`}
`
