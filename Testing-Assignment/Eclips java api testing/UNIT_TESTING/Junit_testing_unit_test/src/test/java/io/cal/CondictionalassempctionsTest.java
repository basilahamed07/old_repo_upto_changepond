package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;

class CondictionalassempctionsTest {

	@Test
	@EnabledOnOs(OS.LINUX)
	void testOS() {
		System.out.println("this code was checking for an linux meachine");
		
	}
}
