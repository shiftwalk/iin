export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0, ease: [0.71,0,0.17,1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0, ease: [0.71,0,0.17,1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.66, ease: [0.71,0,0.17,1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.33, ease: [0.71,0,0.17,1] }
	}
}