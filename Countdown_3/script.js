const endTime = new Date('2018-06-02 00:00:00');

function time() {
	
	const nowTime = new Date().getTime()
	let time = endTime - nowTime
	let days = Math.floor(time / (1000 * 60 * 60 * 24))
	let hours = Math.floor(time / (1000 * 60 * 60) % 24)
	hours = hours < 10 ? '0' + hours : hours
	let minutes = Math.floor(time / (1000 * 60) % 60)
	minutes = minutes >= 10 ? minutes : '0' + minutes
	let secs = Math.floor(time / (1000) % 60)
	secs = secs >= 10 ? secs : '0' + secs

	const clock = document.querySelector('.clock')
	clock.innerHTML = `${'<span>'} ${days} ${'</span>'}
					   ${'<span>'} ${hours} ${'</span>'}
					   ${'<span>'} ${minutes} ${'</span>'}
					   ${'<span>'} ${secs} ${'</span>'}`
	
	const spans = clock.getElementsByTagName('span');
	animateClock(spans[3]);
	if (secs == 59) animateClock(spans[2]);
	if (minutes == 59 && secs == 59) animateClock(spans[1]);
	if (hours == 23 && minutes == 59 && seconds == 59) animateClock(spans[0]);
	
	function animateClock(span){
		span.className = 'turn';
		setTimeout (function(){ 
		span.className = '';
		},700);
}
	}
	setInterval(time, 1000);

