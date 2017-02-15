
import Geocoder from 'react-native-geocoder';

export default class Geolocation 
{

	constructor() 
	{
 		this.country='';
	}

	static getNameCountry()
	{
				
		return new Promise((resolve, reject) => {
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
							resolve(this.country);
						
							
						})
						.catch(err => alert(err));
			       },
			       (error) => {
			        console.log(error)
			      },
			     {enableHighAccuracy: true}
			);
		});	
	}


}