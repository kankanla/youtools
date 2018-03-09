
function body_color(){
	var jjj = document.getElementsByTagName('body');
	jjj[0].style.backgroundColor="rgba(114, 174, 185, 0.26)";
}

function abc(){
	var jt = document.getElementsByClassName('more-menu-wrapper');
	if(jt.length > 0){
			chk = "ok";
	}
	
	var you_dl = document.getElementsByClassName("yt-alert yt-alert-default yt-alert-info  playlist-cleared-of-deleted-videos-alert");
	if(you_dl.length > 0){
		chk = "ng";
	}
	
	for(var i in jt){
		if(jt[i].childNodes){
			if(jt[i].childNodes.length === 1){
				jt[i].parentNode.parentNode.style.backgroundColor = 'red';
				var tt = document.getElementById('pl-header')
					tt.style.backgroundColor = 'red';
				var ttt = document.getElementById('yt-masthead-container');	
					ttt.style.backgroundColor = 'red';
				chk = "ng";
			}else{
			//console.clear();
			}
		}
	}
}


// class="yt-alert yt-alert-default yt-alert-info  playlist-cleared-of-deleted-videos-alert"


function chk_my_item(){
	// var tag = document.getElementsByClassName('yt-uix-sessionlink g-hovercard      spf-link ');

	var tag4 = document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string');
		if(tag4.length > 0){
			for(var i in tag4){
				if(tag4[i].href == 'https://www.youtube.com/user/icq7219388' ||
				   tag4[i].href == 'https://www.youtube.com/user/kankanla09' || 
				   tag4[i].href == "https://www.youtube.com/channel/UCNSXxplP-UWcZFz3-wDM3RQ" ||
				   tag4[i].href == "https://www.youtube.com/channel/UCKWg8wctnd4q7z_5ojOclKA" ||
				   tag4[i].href == "https://www.youtube.com/channel/UCk0QT-xjO1y4gsa2bFyNDjQ" ){
				   tag4[i].parentNode.parentNode.parentNode.style.backgroundColor='RED';
				}
			}
		}


	// var tag3 = document.getElementsByClassName(' yt-uix-sessionlink      spf-link ');
	var tag3 = document.getElementsByClassName(' yt-uix-sessionlink      spf-link ');
		if(tag3.length > 0){
			for(var i in tag3){
				if(tag3[i].href == 'https://www.youtube.com/user/icq7219388' ||
				   tag3[i].href == 'https://www.youtube.com/user/kankanla09' || 
				   tag3[i].href == "https://www.youtube.com/channel/UCNSXxplP-UWcZFz3-wDM3RQ" ||
				   tag3[i].href == "https://www.youtube.com/channel/UCKWg8wctnd4q7z_5ojOclKA" ||
				   tag3[i].href == "https://www.youtube.com/channel/UCk0QT-xjO1y4gsa2bFyNDjQ" ){
				   tag3[i].parentNode.parentNode.parentNode.style.backgroundColor='Gold';
				}
			}
		}


	var tag2 = document.getElementsByClassName('g-hovercard');
		if(tag2.length > 0){
			for(var x  in tag2){
				if(tag2[x].innerText == "Xiao Bai" ||
				   tag2[x].innerText == "AW Music Mix" ||
				   tag2[x].innerText == "KANKAN" ){
				   tag2[x].parentNode.parentNode.parentNode.style.backgroundColor='Gold';
				}
			}
		}
}


function chk_del_user(){
		var tag = document.getElementsByClassName('yt-uix-sessionlink g-hovercard      spf-link ');
		if(tag.length > 0){
			for(var i in tag){
				if(
					tag[i].href == 'https://www.youtube.com/channel/UCPv4x_sLkl8tsBCS--aoASQ' ||
					tag[i].href == 'https://www.youtube.com/channel/UCPOzcixjIIj-F7WxtFLoeWA' ||
					tag[i].href == 'https://www.youtube.com/channel/UCvTDwUGW41jGzrKUrNAjW3w' ||
					tag[i].href == 'https://www.youtube.com/channel/UCIrzk08B6OHq6CTEi5LTM-A' ||
					tag[i].href == 'https://www.youtube.com/channel/UCiw-Il_jgZlDokbIXOBAwBw' ||
					tag[i].href == 'https://www.youtube.com/channel/UCCwEw5ZlP3QmgISJplp4rNA' ||
					tag[i].href == 'https://www.youtube.com/channel/UCj_TUjpxaS1iuK8roR7bB0w' ||
					tag[i].href == 'https://www.youtube.com/channel/UCe9sr3nyVycsbXB1PlJQ63w' ||
					tag[i].href == 'https://www.youtube.com/channel/UCarB6_K5Hy422asmDX9T1ew' ||
					tag[i].href == 'https://www.youtube.com/channel/UCAuxXt4w3hAJJKA_Xy5mDZQ' ||
					tag[i].href == 'https://www.youtube.com/channel/UCfG-I3AEbrxM0bp3xCJVk5g' ||
					tag[i].href == 'https://www.youtube.com/channel/UC9a6e6Hd7ShWcnGkNVcomoA' ||
					tag[i].href == 'https://www.youtube.com/channel/UCNwgG5F2W8OJ4G37WYh1RqA' ||
					tag[i].href == 'https://www.youtube.com/channel/UCMbTe5JqeDWsEHcbIzapiAQ' ||
					tag[i].href == "https://www.youtube.com/channel/UC5S_v9ReRER5VHPciNPabQw" 
				   ){
				   tag[i].parentNode.parentNode.parentNode.style.backgroundColor='red';
				   chk = "ng";
				}
			}
		}
}


function auto_link(){
	var ja = document.getElementsByClassName('vm-video-title-text yt-uix-sessionlink');
	var cont = ja.length;

		function aut(){
			cont = cont -1;
				if(opener == null && location.pathname == "/view_all_playlists"){
					document.title = cont;
				}
			
			if(ja[cont]){
				// oper = open(ja[cont].href);
				oper = open(ja[cont].href + '&disable_polymer=true');
				if(oper.readyState = 4){
					var scont = oper.document.getElementById("masthead-search-term");
						console.log(scont);
				}
			}

			if(cont < 0 ){
				clearInterval(opentime);
				if(opener == null && location.pathname == "/view_all_playlists"){
					document.title = "end";
				}
			}
		}
		
	opentime = setInterval(aut,3500);
}

onchange = function(){
		abc();
		chk_my_item();
}

onmousemove = function(){
		chk = "ng";
		body_color();
		chk_my_item();
		if(typeof(opentime) != "undefined"){
			clearInterval(opentime);
		}
		if(typeof(closetime) != "undefined"){
			clearTimeout(closetime);
		}
		abc();
}

onmouseover = function(){
		chk = "ng";
		body_color();
		chk_my_item();
		if(typeof(opentime) != "undefined"){
			clearInterval(opentime);
		}
		if(typeof(closetime) != "undefined"){
			clearTimeout(closetime);
		}
		abc();
}

onload = (function(){
		chk = "ng";
		abc();
		chk_my_item();
		chk_del_user();
		if(chk == "ok" && opener.location.hostname == "www.youtube.com"){
			closetime = setTimeout(close,4500);
		}
			setTimeout(auto_link,6000);
})()





