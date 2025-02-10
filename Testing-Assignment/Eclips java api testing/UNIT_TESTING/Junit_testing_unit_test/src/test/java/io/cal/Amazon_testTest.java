package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Amazon_testTest {

	@Test
	void testSlogan() {
		
		String expected = "Spend less, smile more";
		String actual = "Spend less, smile more";
		
		assertEquals(expected,actual);
		assertSame(expected,actual, "the expected reault should match with actual values");
	}

}


