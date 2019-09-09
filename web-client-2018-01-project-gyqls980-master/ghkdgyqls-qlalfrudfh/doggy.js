
function bigger(x){
	x.style.height = "150px";
	x.style.width = "150px";
}
function smaller(x){
	x.style.height = "100px";
	x.style.width = "100px";
}

function enroll(){
	if(confirm("등록하시겠습니까?") == true){
		
	    question = new Object();
	    question.username = $('#q_name').val();
	    question.userid = $('#q_id').val();
	    question.qtitle = $('#qtitle').val();
	    question.email = $('#email').val();
	    question.qtext = $('#questions').val();
	    	    
	    var jsonString = JSON.stringify(question);
	    location.href = "index.html";

   	}

}

function joinpop(){
	window.open('information.html', "popup", "toolbar=no, top=0, width = 400, height = 250");
}

function heart(){
	
	window.alert("좋아요가 정상적으로 눌렸습니다!");
}


function titleColor(){
	num = 0; 
	setInterval(function(){
		var text = document.getElementById('dogsintro');
		var arr = new Array('red', 'blue', 'green', 'orange', 'pink','black');
		
		
		if(num == 6){
			num=0;
		}
		var textcolor = arr[num];
		num++;
		text.style.color = textcolor;
	}, 1500);
	
	

}

