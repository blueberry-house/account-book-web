import * as S from './Calendar.style'
import { Date } from './types'
import dayjs, { Dayjs } from 'dayjs'
import { ReactElement, useState, useMemo } from 'react'

interface Props {
	baseDay?: number
	renderItem?: (date: Date) => ReactElement
}

export default function Calendar({ baseDay = 1, renderItem }: Props) {
	const today = useMemo(() => dayjs(), [])

	// Initialize: set days based on today
	const [days, setDays] = useState<Dayjs[]>(getDays(today.date(baseDay)))
	const isCurrentMonth = days.some(d => d.isSame(today, 'day'))

	const goToPrevMonth = () => {
		setDays(days => getDays(days[0].subtract(1, 'month')))
	}

	const goToNextMonth = () => {
		setDays(days => getDays(days[0].add(1, 'month')))
	}

	const goToCurrentMonth = () => {
		setDays(getDays(today.date(baseDay)))
	}

	return (
		<S.Calendar>
			<S.Header>
				<S.Title>{days[0].format('MMM YYYY')}</S.Title>
				<S.Controller>
					{!isCurrentMonth && <S.Button onClick={goToCurrentMonth}>오늘</S.Button>}
					<S.Button onClick={goToPrevMonth}>이전달</S.Button>
					<S.Button onClick={goToNextMonth}>다음달</S.Button>
					<S.Button>설정</S.Button>
				</S.Controller>
				<S.Weekdays>
					<S.Weekday>Su</S.Weekday>
					<S.Weekday>Mo</S.Weekday>
					<S.Weekday>Tu</S.Weekday>
					<S.Weekday>We</S.Weekday>
					<S.Weekday>Th</S.Weekday>
					<S.Weekday>Fr</S.Weekday>
					<S.Weekday>Sa</S.Weekday>
				</S.Weekdays>
			</S.Header>
			<S.Body blanks={days[0].day()}>
				{days.map((day, i) => (
					<S.Day key={day.format()} isToday={day.isSame(today, 'day')}>
						<S.DayText>{day.format(days[i - 1]?.isSame(day, 'month') ? 'D' : 'M/D')}</S.DayText>
						{renderItem?.({
							year: day.year(),
							month: day.month() + 1,
							day: day.date(),
						})}
					</S.Day>
				))}
			</S.Body>
		</S.Calendar>
	)
}

function getDays(start: Dayjs): Dayjs[] {
	let days: Dayjs[] = []
	const end = start.add(start.daysInMonth(), 'day')
	for (let day = start; day < end; day = day.add(1, 'day')) {
		days = [...days, day]
	}
	return days
}
