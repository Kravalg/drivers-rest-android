

export default class SoundPlay
{
	static playShortSound(nameSound, seconds)
	{	
		const Sound = require('react-native-sound');	
		const s = new Sound(nameSound, Sound.MAIN_BUNDLE, (e) => { 
	        s.play();

	        setTimeout(function() {
			  s.stop();
			}, seconds);

    	});
	}


}