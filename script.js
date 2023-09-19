
   function toggleMode() { 
    const html = document.documentElement
  
    /*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    }*/
    html.classList.toggle('light')
    //tag image
    const image = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
    //se tiver light mode, add img light 
    image.setAttribute('src', './assets/avatar-light.png')   
    
    } else{
    //se nao tiver manter img normal   
        image.setAttribute('src', './assets/avatar.png')
    }

   }
    
    

