import { useEffect, useRef } from 'react'

const limitRange = (num, limit) => {
	if (num > 0) return 0
	if (num < limit) return limit
	return num
}

export const useScrollHide = () => {
	const ref = useRef(null)

	useEffect(() => {
		const scroll = () => {
			const element = ref.current
			let { top, height } = element.getBoundingClientRect()
			const scrollYBefore = Number(element.getAttribute('data-scrollY')) ?? 0
			const { scrollY } = window
			const translateY = scrollYBefore - scrollY
			top += translateY
			top = limitRange(top, height * -1)

			element.style.top = top + 'px'
			element.setAttribute('data-scrollY', scrollY)
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [])

	useEffect(() => {
		const element = ref.current
		let controlHide = null
		let resetTransition = null

		const scroll = () => {
			controlHide && clearTimeout(controlHide)
			controlHide = setTimeout(() => {
				const { top, height } = element.getBoundingClientRect()
				const isHide = height / 2 < top * -1
				element.style.transition = 'top 0.1s ease'

				isHide
					? (element.style.top = height * -1 + 'px')
					: (element.style.top = 0)

				resetTransition && clearTimeout(resetTransition)
				resetTransition = setTimeout(
					() => (element.style.transition = 'none'),
					100
				)
			}, 200)
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [])

	return ref
}
