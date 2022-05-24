import {
	Button,
	FormControl,
	FormErrorMessage,
	Input,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export const ContentForm = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = e => {
		console.log(e)
	}

	return (
		<ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
			<ModalHeader>Producto</ModalHeader>
			<ModalCloseButton />
			<ModalBody display='grid' gap='1rem'>
				<FormControl>
					<Input
						variant='filled'
						disabled
						{...register('sku', { required: true, value: 'TEST1' })}
					/>
				</FormControl>
				<FormControl isInvalid={errors.name}>
					<Input
						placeholder='Nombre'
						variant='filled'
						{...register('name', {
							required: {
								value: true,
								message: 'El nombre es requerido.',
							},
							maxLength: {
								value: 50,
								message: 'Nombre demasiado lago.',
							},
						})}
					/>
					<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.quantity}>
					<Input
						placeholder='Cantidad'
						variant='filled'
						type='number'
						defaultValue={1}
						{...register('quantity', {
							valueAsNumber: true,
							required: {
								value: true,
								message: 'La cantidad es requerida.',
							},
							min: {
								value: 1,
								message: 'Cantidad minima 1.',
							},
							pattern: {
								value: /^[0-9]*$/,
								message: 'Solo número enteros.',
							},
						})}
					/>
					<FormErrorMessage>{errors.quantity?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.price}>
					<Input
						placeholder='Precio'
						variant='filled'
						type='number'
						{...register('price', {
							valueAsNumber: true,
							required: {
								value: true,
								message: 'El precio es requerido.',
							},
							min: {
								value: 0,
								message: 'El precio debe ser mayor o igual a 0.',
							},
						})}
					/>
					<FormErrorMessage>{errors.price?.message}</FormErrorMessage>
				</FormControl>
			</ModalBody>
			<ModalFooter gap='1rem'>
				<Button onClick={onClose} colorScheme='gray'>
					Cancelar
				</Button>
				<Button type='submit'>Enviar</Button>
			</ModalFooter>
		</ModalContent>
	)
}
