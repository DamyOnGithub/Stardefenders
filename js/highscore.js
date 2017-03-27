var highState = {

    create: function() {
        this.pi = game.add.text(300, 300, 'score: 0', { fontSize: '32px', fill: '#FE2EF7' });
        this.getQuestion();
        this.sendQuestion();
    },

    getQuestion: function(){
        text = this.pi;
		var request = new XMLHttpRequest();
		request.open('GET', 'js/server.php', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.onload = function(){
			if(request.status >= 200 && request.status < 400){
                            //Correct
				var result = request.responseText;
				console.log(this.pi);
                console.log("no error mate");
                text.text = "score:" + result;
			}
			else{
				console.log("error mate");
			}
		}
        console.log("lol mate");
		request.send();
	},
    sendQuestion: function(){
        console.log(this.pi);
    }


};
