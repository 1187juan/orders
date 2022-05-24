import { Button, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { ContentForm } from './ContentForm'

export const AddProduct = ({ orderId }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	return (
		<>
			<Button onClick={onOpen}>Agregar</Button>
			<Modal isOpen={isOpen} onClose={onClose} isCentered size='xs'>
				<ModalOverlay />
				<ContentForm onClose={onClose} orderId={orderId} />
			</Modal>
		</>
	)
}
