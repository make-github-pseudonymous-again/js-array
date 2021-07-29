import {zip, range} from '../index.js';

export function enumerate(iterable, out) {
	zip([range(0, iterable.length, 1, []), iterable], out);

	return out;
}
