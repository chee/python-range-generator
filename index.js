module.exports = function* range(...args) {
	let start, stop, step

	switch (args.length) {
	case 3:
		[start, stop, step] = args
		break
	case 2:
		[start, stop, step] = [...args, 1]
		break
	case 1:
		[start, stop, step] = [0, args[0], 1]
		break
	case 0:
		throw TypeError('range expected at least 1 arguments, got 0')
	default:
		throw TypeError(`range expected at most 4 arguments, got ${args.length}`)
	}

	if (!args.every(arg => Number.isInteger(arg))) {
		throw TypeError('range only takes integer arguments')
	}

	if (step === 0) {
		throw Error('step argument must not be zero')
	}

	if (start < stop) {
		if (step < 0) return
		while (start < stop) {
			yield start
			start += step
		}
	} else {
		if (step > 0) return
		while (start > stop) {
			yield start
			start += step
		}
	}
}
