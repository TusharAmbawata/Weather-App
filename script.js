// let c = document.querySelectorAll('.cityName1')

const Weather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct1.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		feels_like1.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees2.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

Weather('delhi')

const Weather1 = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct2.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
Weather1('mumbai')

const Weather2 = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct3.innerHTML = response.cloud_pct
		temp5.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
Weather2('chennai')

const Weather3 = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct4.innerHTML = response.cloud_pct
		temp6.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
Weather3('goa')

const Weather4 = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct5.innerHTML = response.cloud_pct
		temp7.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity7.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed7.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
Weather4('lucknow')

const Weather5 = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)


	.then(response => response.json())
	.then((response) => {
		console.log(response)


		cloud_pct6.innerHTML = response.cloud_pct
		temp8.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity8.innerHTML = response.humidity
		min_temp7.innerHTML = response.min_temp
		max_temp7.innerHTML = response.max_temp
		wind_speed8.innerHTML = response.wind_speed
		wind_degrees7.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
Weather5('kolkata')
