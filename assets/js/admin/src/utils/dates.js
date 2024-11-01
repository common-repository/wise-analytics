import moment from 'moment';

export function getDatesRange(preset) {
	if (preset === 'today') {
		return { startDate: moment().toDate(), endDate: moment().toDate() };
	}
	if (preset === 'tomorrow') {
		return { startDate: moment().add(1, 'days').toDate(), endDate: moment().add(1, 'days').toDate() };
	}
	if (preset === 'yesterday') {
		return { startDate: moment().subtract(1, 'days').toDate(), endDate: moment().subtract(1, 'days').toDate() };
	}
	if (preset === 'thisWeek') {
		return { startDate: moment().startOf('week').toDate(), endDate: moment().toDate() };
	}
	if (preset === 'last7Days') {
		return { startDate: moment().subtract(6, 'days').toDate(), endDate: moment().toDate() };
	}
	if (preset === 'next7Days') {
		return { startDate: moment().toDate(), endDate: moment().add(6, 'days').toDate() };
	}
	if (preset === 'lastWeek') {
		return { startDate: moment().subtract(1, 'weeks').startOf('week').toDate(), endDate: moment().subtract(1, 'weeks').endOf('week').toDate() };
	}
	if (preset === 'last14Days') {
		return { startDate: moment().subtract(13, 'days').toDate(), endDate: moment().toDate() };
	}
	if (preset === 'thisMonth') {
		return { startDate: moment().startOf('month').toDate(), endDate: moment().endOf('month').toDate() };
	}
	if (preset === 'nextMonth') {
		return { startDate: moment().add(1, 'months').startOf('month').toDate(), endDate: moment().add(1, 'months').endOf('month').toDate() };
	}
	if (preset === 'last30Days') {
		return { startDate: moment().subtract(29, 'days').toDate(), endDate: moment().toDate() };
	}
	if (preset === 'next30Days') {
		return { startDate: moment().toDate(), endDate: moment().add(29, 'days').toDate() };
	}
	if (preset === 'lastMonth') {
		return { startDate: moment().subtract(1, 'months').startOf('month').toDate(), endDate: moment().subtract(1, 'months').endOf('month').toDate() };
	}
}

export function getDuration(seconds) {
	if (seconds < 0) {
		seconds = -seconds;
	}

	const time = {
		d: Math.floor(seconds / 86400),
		h: Math.floor(seconds / 3600) % 24,
		m: Math.floor(seconds / 60) % 60,
		s: Math.floor(seconds) % 60
	};

	return Object.entries(time)
		.filter(val => val[1] !== 0)
		.map(([key, val]) => `${val}${key}`)
		.join(' ');
}