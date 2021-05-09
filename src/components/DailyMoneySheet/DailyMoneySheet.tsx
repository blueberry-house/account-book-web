import { Date } from '@components/Calendar/types'

interface Props extends Date {}

export default function DailyMoneySheet({ year, month, day }: Props) {
	console.log(year, month, day)
	return <div />
}
