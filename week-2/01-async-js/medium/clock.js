function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const sec= currentDate.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';

    //To Convert hours to 12-hour format :
    // hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${sec < 10 ? '0' : ''}${sec} ${ampm}`;
    console.log(formattedTime);;
}

setInterval(()=>{
    getCurrentTime()
},1000)