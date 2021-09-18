const request = require('postman-request');


const forecast = (latitude, longitude, callback)=>{

  const url = 'http://api.weatherstack.com/current?access_key=96af99fe99f3cd6672b303096d9a229a&query='+longitude+','+latitude+'&units=m';

  request({url, json:true}, (error, {body}={})=>{
    if(error){
      callback('Unable to connect to weather service', undefined);
    }else if(body.error){
      callback('Unable to find weather location');
    }else{
      callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out, It feels like ${body.current.feelslike} degrees out. And a humidity of ${body.current.humidity}`);
    }
  })
}

module.exports= forecast;
