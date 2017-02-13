
import Geocoder from 'react-native-geocoder';

export default class Geolocation 
{

	constructor() 
	{
 		this.country='';
	}

	static getNameCountry()
	{
		
		navigator.geolocation.getCurrentPosition(
		    	(position) => {
		      		var latitude = position.coords.latitude;
		            var longitude = position.coords.longitude;

		             NY = {
						lat: latitude,
						lng: longitude
					};

					Geocoder.geocodePosition(NY).then(res => {
						var json = JSON.stringify(res);
						var jsonPars = JSON.parse(json);				
						this.country = jsonPars[1].countryCode;
						
						
					})
					.catch(err => alert(err));
		       },
		       (error) => {
		        console.log(error)
		      },
		     {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}

		);

			return this.country;	
	}
}