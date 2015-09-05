//アラームフラグを初期化する。
var flg =0;

//時刻更新＆アラームチェックファンクション
function timeCheck(){
	//時刻を取得。
	Now = new Date();
	Hour = Now.getHours();
	Min = Now.getMinutes();
	Sec = Now.getSeconds();

	//時刻を表示。
	document.sampleForm.dspTime.value=Hour + ":" + Min + ":" + Sec;

	//時刻をチェック。
	if((flg == 1) && (document.sampleForm.alermH.value == Hour) &&
		(document.sampleForm.alermM.value == Min)&&
		(document.sampleForm.alermS.value == Sec)){
		if(window.confirm('起床時間になりました！！！')){
			window.close();
		}else{
			changeFlg();
		}
	}
	//次の更新をセットする。
	window.setTimeout("timeCheck();",100);
	window.setTimeout("timeCheck();",100);
}
//アラームフラグ変更ファンクション
function changeFlg(){
	if(flg == 0){
	//アラーム未設定時、
		document.sampleForm.setAlerm.value=" 設定済み ";
		flg =1;
	}else{
	//アラーム設定済み時、
		document.sampleForm.setAlerm.value=" アラーム未設定 ";
		flg =0;
	}
}

//背景関係
i = 0;
	url = "C:/Users/聖人_2/Documents/mezamasi/sample/";         //背景画像保存先

img = new Array("s_1.jpg","s_2.jpg","s_3.jpg","s_4.jpg","s_5.jpg");   //配列を作成
function change(){                //背景画像を変える
		i++;
		if(i >= img.length) {
				i = 0;
		}
		document.body.background = url + img[i];
}
function tm(){                    //タイマーをセット
		document.body.background = url + img[i];
		tm = setInterval("change()",10000);
}

//音楽関係
flag = true;
function alarm(){
	sec = (new Date()).getSeconds();
	if ((sec < 3) && flag && document.all) { mySND.src = "s2.mp3"; flag = false; }
	if (sec > 3) flag = true;
}

$(function(){
	window.setTimeout('timeCheck();',200);
});
$(function time(){
	var s = (new Date()).getSeconds();
});
$("#btm").click(changeFlg);
