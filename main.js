const h1=document.getElementById("h1");let counter=1;const autoWriting=()=>{let t="Welcome To Ahmed Hesham World";h1.innerText=t.slice(0,counter),t.length<++counter&&clearInterval(stopAutoFunc)},stopAutoFunc=setInterval(autoWriting,100);