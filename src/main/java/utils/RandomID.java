package utils;
import java.util.Random;

public class RandomID {
	
	public int getuniqueid(){
		
		Random rand = new Random();
		int maxNumber = 10;
		int randomNumber = rand.nextInt(maxNumber) + 1;
		
		return randomNumber;
	}
}
