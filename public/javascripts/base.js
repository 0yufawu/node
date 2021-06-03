//  footer 部分的logo切换开始-----------------------------------------------------------------
/**
 * 切换底部的按钮图片
 */
 toggleLogo();
 function toggleLogo() {
     $('#lastlogo dd').on('mouseover', function (e) {
         var target = $($.getTarget(e));
         var text = target.text();
         switch (text) {
             case "微信":
                 $('#imgshow').css('right', '126px').show();
                 break;
             case "QQ群":
                 $('#imgshow').css('right', '63px').show();
                 break;
             case  "新浪":
                 $('#imgshow').css('right', '0px').show();
                 break;
             case "邮箱" :
                 $('#imgshow').css('right', '-63px').show();
                 break;
         }
     }).on('mouseout', function () {
         $('#imgshow').hide();
     });







     
 }



 
 //  footer 部分的logo切换结束-----------------------------------------------------------------


 function addBase() {
    let d = document.getElementById("addin");
    d.style.display = '';

}

function closes() {
    let d = document.getElementById("addin");
    d.style.display = 'none';
}

function alter(){
    let d = document.getElementById("alterNew");
    d.style.display = '';
}
function closes() {
    let d = document.getElementById("alterNew");
    d.style.display = 'none';
}

// function rem() {
//     // location.reload();
//     let type = document.getElementById("type");
//     type.value = '';

//     let name = document.getElementById("name");
//     name.value='';
// }

// function sch() {

//     let lei = document.getElementById("lei");
//     let typeName = lei.value;

//     let name = donamcument.getElementById("ying");
//     let rowLength = tables.rows.length;
//     let colLength = tables.rows[0].cells.length - 1;
//     if (herName == '') {
//         for (let i = 1; i < rowLength; i++) {
//             let searchSex = tables.rows[i].cells[2].innerHTML;
//             let searchPos = tables.rows[i].cells[4].innerHTML;
//             if (searchSex.match(sexName) && searchPos.match(posName)) {
//                 tables.rows[i].style.display = '';
//             } else {
//                 tables.rows[i].style.display = 'none';
//             }
//         }
//     }}