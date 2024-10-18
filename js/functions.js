
document.addEventListener("DOMContentLoaded",function() {

    fetch('http://alvaro.daw.inspedralbes.cat/api.php/records/BOOK')
    .then(response => response.json())
    .then(data => pintarDatos(data));



    function pintarDatos(params) {
        
    let htmlString="";

    for (let index = 0; index < params.records.length; index++) {
        
        htmlString+=`<div id=${index}> ${params.records[index].title} <br>
        <img src="${params.records[index].cover}" width='30%'> <br>

        <img id=${index} name=like src="./img/hand-thumbs-up.svg"> ${params.records[index].likes}
        <img id=${index} name=dislike src="./img/hand-thumbs-down.svg">  ${params.records[index].dislikes}
        </div><br>`;
        
    }
    

        document.getElementById("list").innerHTML=htmlString;

    }
    
    document.getElementById("list").addEventListener("click",function(e){
        
        if(e.target.name=="like"){

            alert("Has apretado like en el libro "+e.target.id )

        }

        if(e.target.name=="dislike"){
           
            alert("Has apretado dislike en el libro "+e.target.id )
        }

       

        


    })
   
    


   
})
