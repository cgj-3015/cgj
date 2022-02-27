var imgs = document.querySelector('.baidu').querySelectorAll('img');
           
          
           
          
            for(i = 0;i<imgs.length;i++){
                imgs[i].onclick = function(){
                    document.body.style.backgroundImage = 'url('+this.src+')';
                }
            }