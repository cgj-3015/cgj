var imgt = document.querySelector('img');
        var flag = 0;
        imgt.onclick = function(){
            if(flag==0){
                document.body.style.backgroundColor = 'black';
                this.src = './灯泡 (1).png';
                flag=1;
            }
            else{
                document.body.style.backgroundColor = 'white';
                this.src = './灯泡.png';
                flag=0;
            }
            
        }