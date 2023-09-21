
// const ul = document.getElementById("test");
// $.get("http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images", function(data){
//     for(let i = 0; i < data.length;i++){
//         const li = document.createElement("li")
//         const image = document.createElement("img")
//         image.src = data[i]
//         li.innerHTML = data[i]
//         li.appendChild(image)
//         ul.appendChild(li)
//     }
// });

// const ul = $("#test"); //query DOM element in html
// //get data, in array form
// $.get("http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images", function(data){
//     for(let i = 0; i < data.length;i++){
//         ul.append(
//             $("<li>").html(
//                 $("<img>", {src:data[i]})
//             )
//         )
//     }
// });

const ul = $("#main-feed"); //query DOM element in html
const template1 = $("#template1")
//get data, in array form
$.get("http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images", function(data){
    for(let i = 0; i < data.length;i++){
        const li = $(template1.html()) //create li from template1
        li.find(".feed-image").attr("src",data[i])
        ul.append(li)

        //choose a heart
        //add onclick listener when user click, hide black and show red heart
        const blackHeart = li.find(".black-heart");
        const redHeart = li.find(".red-heart").hide();
        blackHeart.on("click", function(){
            blackHeart.hide();
            redHeart.show()
        })
        redHeart.on("click", function(){
            blackHeart.show();
            redHeart.hide()
        })
        const comment = li.find(".comment-box")
        comment.on("keypress", function(event){
            //if user press enter
            if(event.which === 13){
                event.preventDefault(); //make html stop working!
                const commentContent = comment.val().trim(); //same as $(this).val() = event.target.value but this is jquery
                li.find(".text-box").append(
                    $("<p>").html(
                        commentContent
                    )
                )
                //reset comment
                comment.val("")
            }
        });
        

    }
});






