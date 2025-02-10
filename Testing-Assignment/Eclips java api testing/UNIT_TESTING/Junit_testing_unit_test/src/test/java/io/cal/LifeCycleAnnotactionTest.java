package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;



@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class LifeCycleAnnotactionTest {

	LifeCycleAnnotaction life = new LifeCycleAnnotaction();
	
	@Test
	@BeforeAll
	static void beforeall() {
		System.out.println("Step:1 First BEFORE ALL DECERATOR");
		System.out.println("");
		
	}
	
	@AfterAll
	static void afterall() {
		LifeCycleAnnotaction life = new LifeCycleAnnotaction();
		System.out.println("if will run after all the methods");
		System.out.println("");
	}

	@BeforeEach
void init() {
	
		System.out.println("Step:2 it will run one function and anoter function in between");
		System.out.println("");
}
	@AfterEach
void cleanup() {
		System.out.println("Step:3 it will run after thr function runs");
		System.out.println("");
	
}

@Test
void testcube() {
	int expected = 125;
	int actual = life.cube(5);
	assertEquals(expected,actual);
	System.out.println(actual);
}
@Test
void squarss() {
//	LifeCycleAnnotaction life = new LifeCycleAnnotaction();
	
	int expected = 21;
	int actual = life.square(5);
	
	if(expected == actual){
		assertEquals(expected,actual,"this test case was pass");
	}
	else {
		System.out.println(expected +"Error Value");
	}
}


@Nested
class TestPositiveNumber {
	
	@Test
	void testPositiveNo() {
		boolean expected = false;
		boolean actual = life.positive(-1);
		assertEquals(expected,actual);
	}
}
}
