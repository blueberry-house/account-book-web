import Calendar from '@components/Calendar'
import DailyMoneySheet from '@components/DailyMoneySheet'
import Modal, { useModal } from '@components/Modal'

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
			<Calendar renderItem={date => <DailyMoneySheet {...date} />} />
		</div>
	)
}
