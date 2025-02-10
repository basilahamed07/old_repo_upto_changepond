package io.cal;

public class LifeCycleAnnotaction {

	public int cube(int b) {
		return (b*b*b);
	}
	
	public int square(int a) {
		return (a*a);
	}
	
	
	
	public boolean positive(int a) {
		if(a > 0) {
			return true;
		}
		else {
			return false;
		}
	}
}
