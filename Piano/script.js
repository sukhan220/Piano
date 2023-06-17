window.onkeydown=(e)=>{
    let key= document.querySelector(`audio[data-key="${e.key}"]`);
    if(!key){
        return;
    }
    key.pause();
    console.dir(key);
    key.volume = 0.3;
    key.currentTime = 0;
    key.play();
}