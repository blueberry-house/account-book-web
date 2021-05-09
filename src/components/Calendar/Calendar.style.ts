import styled, { css } from 'styled-components'

export const Calendar = styled.div`
	width: 100%;
`

export const Header = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`

export const Title = styled.div`
	flex: 1;
`

export const Controller = styled.div`
	display: flex;
	align-items: center;
`

export const Button = styled.button`
	width: 30px;
	height: 30px;
	margin-left: 8px;
	border-radius: 4px;
`

export const Weekdays = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(7, 1fr);
`

export const Weekday = styled.div`
	text-align: center;
`

export const Body = styled.div<{ blanks: number }>`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	${({ blanks }) => css`
		${Day}:first-child {
			grid-column: ${blanks + 1};
		}
	`}
`

export const Day = styled.div<{ isToday?: boolean }>`
	padding: 20px;
	text-align: center;
	${({ isToday }) =>
		isToday &&
		css`
			${DayText} {
				color: red;
				font-weight: bold;
			}
		`}
`

export const DayText = styled.span``
