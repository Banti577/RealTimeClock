setInterval(() =>{
d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();

hourRotate = 30 * h + m / 2;
minutRotate = 6 * m ;
secondRotate = 6 * s;

hour.style.transform = `rotate(${hourRotate}deg)`
minut.style.transform = `rotate(${minutRotate}deg)`
second.style.transform = `rotate(${secondRotate}deg)`

console.log(secondRotate)
},1000)


