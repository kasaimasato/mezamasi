//背景関係
var bscd=["#ffa","#fbf","#fbb","#afa","#aff","#bbf","#ccc"];
var ban_time=1;
var b=0;
var cnt=0;

function banban_bgcolor(){
         document.bgColor=bscd[cnt];
         cnt++;
         if(cnt>=bscd.length)cnt=0;
         clearTimeout(b);
         b=setTimeout('banban_bgcolor();',ban_time*20000);
}

//アラーム関係
var jsalarm={
padfield:function(f){
	return (f<10)? "0"+f : f;
},
showcurrenttime:function(){
	var dateobj=new Date();
	var ct=this.padfield(dateobj.getHours())+":"+this.padfield(dateobj.getMinutes())+":"+this.padfield(dateobj.getSeconds());
	this.ctref.innerHTML=ct;
	this.ctref.setAttribute("title", ct);
	if (typeof this.hourwake!="undefined"){ //if alarm is set
		if (this.ctref.title==(this.hourwake+":"+this.minutewake+":"+this.secondwake)){
      var music_title =	document.getElementById("audio_select").value; //変数music_titleにselectで指定された曲のパスを入れる
      var audio=document.getElementById("music");　//変数audioにaudioのIDを入れる
      audio.src=music_title;　//music_titleに入っている曲のパスをaudioのsrc属性に指定する
      audio.play();
      navigator.vibrate([2000,1000,2000,1000]); // 2秒間のバイブレーション →1秒休止 →再び2秒間
		}
	}
},
init:function(){
	var dateobj=new Date();
	this.ctref=document.getElementById("jsalarm_ct");
	this.submitref=document.getElementById("submitbutton");
	this.submitref.onclick=function(){
		jsalarm.setalarm();
		this.value="アラームを設定";
		this.disabled=true;
		return false;
	}
	this.resetref=document.getElementById("resetbutton");
	this.resetref.onclick=function(){
    document.getElementById("music").pause();　 //曲の停止
  	document.getElementById("music").currentTime = 0;　 //上に同じ
    navigator.vibrate(0);  //バイブレーションの停止
    navigator.vibrate([]); 　//上に同じ
  	jsalarm.submitref.disabled=false;
  	jsalarm.hourwake=undefined;
  	jsalarm.hourselect.disabled=false;
  	jsalarm.minuteselect.disabled=false;
  	jsalarm.secondselect.disabled=false;
   	return false;
	}
	var selections=document.getElementsByTagName("select");
	this.hourselect=selections[0];
	this.minuteselect=selections[1];
	this.secondselect=selections[2];
	for (var i=0; i<60; i++){
		if (i<24)
		this.hourselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getHours()==i);
		this.minuteselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getMinutes()==i);
		this.secondselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getSeconds()==i);
	}
	jsalarm.showcurrenttime();
	jsalarm.timer=setInterval(function(){jsalarm.showcurrenttime()}, 1000);
},
setalarm:function(){
	this.hourwake=this.hourselect.options[this.hourselect.selectedIndex].value;
	this.minutewake=this.minuteselect.options[this.minuteselect.selectedIndex].value;
	this.secondwake=this.secondselect.options[this.secondselect.selectedIndex].value;
	this.hourselect.disabled=true;
	this.minuteselect.disabled=true;
	this.secondselect.disabled=true;
}
};
