let video = document.querySelector('video');

// Set autoplay and loop to false when video loads in
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;

});


// play video and display current volume level
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// update volume as well
	document.querySelector("#volume").innerHTML = String(video.volume *100) +"%"
	
	
});

// pauses video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});


// check if video is muted.  if it is, unmute it and change text to mute.  Else, mute and change to unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuting Video");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muting Video");
	}
		
});


// makes the play rate equal to 90% of current rate and display rate
document.querySelector("#slower").addEventListener("click", function() {
	// Rounding value to 2 decimal places to avoid rounding errors
	video.playbackRate = Math.round(video.playbackRate * .9 * 100) / 100;
	console.log("Slowing down Video to " + String(video.playbackRate));

	
});

// makes the play rate 10/9 faster to balance slow down effect and display rate
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = Math.round(video.playbackRate * (10/9) * 100) / 100;
	console.log("Speeding up Video to " + String(video.playbackRate));

	
});

// changes the volume level and displayed level after each change in slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Adjusting Volume");
	video.volume = document.querySelector("#slider").value / 100
	document.querySelector("#volume").innerHTML = String(video.volume *100)+"%"
	
});

// if the video is 10 seconds to ending, restarts the video.  Otherwise it will add 10 seconds.  The display current time
document.querySelector("#skip").addEventListener("click", function() {
	// console.log(video.duration, video.currentTime)
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
		console.log("Skipping to " + String(video.currentTime));
	} else {
		video.currentTime = 0;
		console.log("Skipping to " + String(video.currentTime));
	}
	
});

// adds oldSchool class to video
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("using oldSchool style");
	video.classList.add("oldSchool")

});

// removes oldSchool class from video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("removing oldSchool style");
	video.classList.remove("oldSchool")

});

