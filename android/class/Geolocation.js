
import Geocoder from 'react-native-geocoder';

export default class Geolocation 
{
	static getNameCountry(){

		navigator.geolocation.getCurrentPosition(function(position) {
			
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

             NY = {
				lat: '',
				lng: ''
			};

			NY.lat = latitude;
			NY.lng = longitude;

			Geocoder.geocodePosition(NY).then(res => {
				var json = JSON.stringify(res);
				var jsonPars = JSON.parse(json);				
				alert(jsonPars[1].country);
			})
			.catch(err => alert(err));
			
		});
	}
}