



export default class SoundPlay
{
	static playShortSound(nameSound)
	{	
		var AudioPlayer = require('react-native-audioplayer');		
  			AudioPlayer.play(nameSound);
	}


}