var video =document.querySelector("#player1");
var vidVolumme = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
  		video.load();
 	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false) {
		video.muted = true;
		this.textContent = 'Unmute';
		console.log("Muted")
 	}
  	else {
 	    video.muted = false;
 	    this.textContent = 'Mute';
		console.log("Unmuted")
	 
  }
 });

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
