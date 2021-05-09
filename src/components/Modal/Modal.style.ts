import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.2);
	animation: ${fadeIn} 0.3s;
`

const slideIn = keyframes`
  from {transform: translateY(20px);}
  to {transform: translateY(0);}
`

export const Modal = styled.div`
	overflow: hidden;
	min-width: 250px;
	max-width: 80vw;
	padding-top: 30px;
	border-radius: 16px;
	background: #fff;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1);
	animation: ${slideIn} 0.2s ease-in-out;
`

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	font-size: 16px;
	font-weight: bold;
`

export const ModalBody = styled.div`
	position: relative;
	font-size: 14px;
	text-align: center;
	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 20px;
		background: linear-gradient(#fff, rgba(256, 256, 256, 0));
	}
	&:after {
		top: auto;
		bottom: 0;
		background: linear-gradient(to top, #fff, rgba(256, 256, 256, 0));
	}
`

export const ModalBodyScroller = styled.div`
	overflow-y: auto;
	max-height: 60vh;
	padding: 20px 30px 40px;
`

export const ModalFooter = styled.div`
	display: flex;
`

export const ModalButton = styled.button`
	position: relative;
	flex: 1;
	height: 50px;
	font-size: 14px;
	box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 1px;
		background: rgba(0, 0, 0, 0.1);
	}
`
