package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Calculator_projectTest {

	@Test
	void test_adding() {
	
		Calculator_project c = new Calculator_project();
		
		int expected = 2;
		int actual = c.add(1,1);
		
		
		assertEquals(expected, actual, "Adding function can calculatr two intigers");
	}
	
	@Test
	void test_subraction() {
	
		Calculator_project c = new Calculator_project();
		
		int expected = -2;
		int actual = c.sub(10,12);
		
		
		assertEquals(expected, actual, "Subraction function can calculatr two intigers");
	}
	
	
	@Test
	void test_multiplay() {
	
		Calculator_project c = new Calculator_project();
		
		int expected = 120;
		int actual = c.multi(10,12);
		
		
		assertEquals(expected, actual, "multiplay function can calculatr two intigers");
	}
	
	
	@Test
	void test_divison() {
	
		Calculator_project c = new Calculator_project();
		
		int expected = 10;
		int actual = c.division(100,10);
		
		
		assertEquals(expected, actual, "division function can calculatr two intigers");
	}


	
	
	//=================================================================================
	
	@Test
	void areaofcircle() {
		Calculator_project c = new Calculator_project();
		
		assertEquals(314.1592653589793, c.area_of_circle(10));
	}
	
	
	// positive checking
	@Test
	void positive_number() {
		Calculator_project c = new Calculator_project();
		int abc = 3;
		if(abc < 0) {
			assertEquals(abc < 0,c.positive(abc), "it is an postitive number");
		}
		}
}
