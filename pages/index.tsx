import Calendar from '@components/Calendar'
import DailyMoneySheet from '@components/DailyMoneySheet'
import Modal, { useModal } from '@components/Modal'
import Select, { Option } from '@components/Select'

export default function Home() {
	const [modal, modalRef] = useModal()

	return (
		<div>
			<button onClick={modal.open}>팝업</button>
			<Modal
				ref={modalRef}
				title="이것은 팝업"
				hasCancel
				hasConfirm
				onConfirm={() => console.log('onConfirm')}
			>
				테스트
			</Modal>
			<Select onChange={v => console.log(v)}>
				<Option value={1}>1</Option>
				<Option value={2} disabled>
					2
				</Option>
				<Option value={3} label={'this is 3'}>
					3
				</Option>
				<div>dd</div>
			</Select>
			<Calendar renderItem={date => <DailyMoneySheet {...date} />} />
		</div>
	)
}
