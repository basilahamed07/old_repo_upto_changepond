package io.cal;


import static org.junit.jupiter.api.Assertions.*;

import java.util.Scanner;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

class Amazon_Create_Accound_PageTest {

	Scanner sc=new Scanner(System.in);
	Amazon_Create_Accound_Page am = new Amazon_Create_Accound_Page();
	String funn_name = "Basil Ahamed";
	@Test
	void names(String funn_name) {
		String first = "Basil";
		String Second = "Ahamed";
		assertEquals(funn_name, am.YouName(first,Second));}
		
	@Test
	void second(String funn_name) {
		// second name is empty
		String first_1 = "Basil";
		String Second_1 = "";
		assertEquals(funn_name, am.YouName(first_1,Second_1));
	}	
	@Test
	void Third(String funn_name) {
		//first empty
		String first_11 = "";
		String Second_11 = "";
		assertEquals(funn_name, am.YouName(first_11,Second_11));
	}
	@Test
	void Fours(String funn_name) {
		//empty empty
		String first_111 = "";
		String Second_111 = "basil";
		assertEquals(funn_name, am.YouName(first_111,Second_111));
	}
	
	@Test
	void test_1numbers() {
		long number = 7397061751l;
		assertEquals(number > 6666666666l, am.mobilenumber(number));
		
		
	}
	@Test
	void test_2numbers() {
		long number = 73970651;
		assertEquals(number > 6666666666l, am.mobilenumber(number));
		
		
	}
	
	@Test
	void test_3numbers() {
		long number = -73970651;
		assertEquals(number > 6666666666l, am.mobilenumber(number));
	}
	
	String Email = "basilahamed46@gmail.com";
	String Email1 = "basilahfdamed46@gmail.com";
	String Email11 = "basilahasdfmed46@gmail.com";
	String Email111 = "basilahafdsfmed46@gmail.com";
	
	@Test
	void test_email_1() {
	
		char[] ch = Email.toCharArray();
		int count_at = 0;
		int count_dot = 0;
		for(int i = 0; ch.length> i ;i++) {
			if(ch[i]=='@'){
				count_at+=1;
			}
			else if(ch[i] == '.') {
				count_dot +=1;
			}
		}
		if(count_at == 1 && count_dot == 1) {
			assertEquals(Email,am.email());
		}
	}
	
	@Test
	void test_email_2() {
		
		char[] ch = Email.toCharArray();
		int count_at = 0;
		int count_dot = 0;
		for(int i = 0; ch.length> i ;i++) {
			if(ch[i]=='@'){
				count_at+=1;
			}
			else if(ch[i] == '.') {
				count_dot +=1;
			}
		}
		if(count_at == 1 && count_dot == 1) {
			assertEquals(Email1,am.email());
		}
	}
	
	@Test
	void test_email_3() {
		
		char[] ch = Email11.toCharArray();
		int count_at = 0;
		int count_dot = 0;
		for(int i = 0; ch.length> i ;i++) {
			if(ch[i]=='@'){
				count_at+=1;
			}
			else if(ch[i] == '.') {
				count_dot +=1;
			}
		}
		if(count_at == 1 && count_dot == 1) {
			assertEquals(Email11,am.email());
		}
	}
	
	
	@Test
	void test_email_4() {
		
		char[] ch = Email111.toCharArray();
		int count_at = 0;
		int count_dot = 0;
		for(int i = 0; ch.length> i ;i++) {
			if(ch[i]=='@'){
				count_at+=1;
			}
			else if(ch[i] == '.') {
				count_dot +=1;
			}
		}
		if(count_at == 1 && count_dot == 1) {
			assertEquals(Email111,am.email());
		}
	}
	
	String valid_1 = "12345678";
	String shorts = "12345";
	String longs = "3456786544";
	String Non_valid = "343";
	String isValidnot = (longs+Non_valid+shorts);
	
	@Test
	void _1Passwords() {
		String valid_1 = "12345678";
		assertEquals(valid_1,am.passwords(valid_1));
	}
	
	@Test
	void _2Passwords(String valid_1) {
		String shorts = "12345";
		assertEquals(valid_1.length() > 8,am.passwords(shorts));
	}
	
	@Test
	void _3Passwords(String valid_1) {
		String longs = "3456786544";
		assertEquals(valid_1.length()>8,am.passwords(longs));
	}
	
	@Test
	void _4Passwords(String valid_1) {
		String Non_valid = "343";
		assertEquals(valid_1.length()>8,am.passwords(longs));
	}
	
	// click cntainer
	
	public String email_check(String Email) {
		char[] ch = Email.toCharArray();
		int count_at = 0;
		int count_dot = 0;
		for(int i = 0; ch.length> i ;i++) {
			if(ch[i]=='@'){
				count_at+=1;
			}
			else if(ch[i] == '.') {
				count_dot +=1;
			}
		}
		if(count_at == 1 && count_dot == 1) {
			return Email;
		}
		return null;
	}
	
	public String password_check(String passwords) {
		if(passwords.length() >=8) {
			return passwords;
		}
		return null;
	}
	
	public long number_chcek(long number) {
		if(number > 6666666666l) {
			return number;
		}
		return 0;
	}
	
	@Test
	void _1testContaner() {
		System.out.println("Enter the email id: ");
		String email = sc.next();
		//checking and gathering email 
		String emails = email_check(email);
		System.out.println("Enter the mobile number id: ");
		long number = sc.nextLong();
		//checking the number length
		long final_number = number_chcek(number);
		
		System.out.println("Enter the password: ");
		String password = sc.next();
		//checking the password
		String final_paswword = password_check(password);
		
		if(emails != null && final_number != 0 && final_paswword != null) {
			equals(am.clickContinue(emails, final_number, final_paswword));
		}
		else {
			System.out.println("not given correct inputs");
		}
		
	}
	
	
	
	//// for creating the report for it
	TestInfo testinfo;
	TestReporter TestReporter;
	
	@Test
	@Tag("names")
	@Tag("Second")
	@Tag("Fours")
	@Tag("test_1numbers")
	@Tag("test_2numbers")
	@Tag("test_3numbers")
	@Tag("test_email_4")
	@Tag("test_email_1")
	@Tag("test_email_2")
	@Tag("test_email_3")
	@Tag("test_email_4")
	@Tag("_1Passwords")
	@Tag("_2Passwords")
	@Tag("_3Passwords")
	@Tag("_4Passwords")
	@Tag("_1testContaner")
	void init(TestInfo testinfo, TestReporter TestReporter) {
		
		am = new Amazon_Create_Accound_Page();
		this.testinfo = testinfo;
		this.TestReporter = TestReporter;
		TestReporter.publishEntry("the testin for the amazon field was success" + testinfo.getTags());
	}
	
	//// end of the report for it
	
	
	
	
	/* report generated Enter the email id: 
	basilahamed46@gmail.com
	Enter the mobile number id: 
	7397061751
	Enter the password: 
	basil123345
	TestIdentifier [init(TestInfo, TestReporter)]
	ReportEntry [timestamp = 2024-07-08T16:34:05.273853200, value = 'the testin for the amazon field was success[names, Second, Fours, test_1numbers, test_2numbers, test_3numbers, test_email_4, test_email_1, test_email_2, test_email_3, _1Passwords, _2Passwords, _3Passwords, _4Passwords, _1testContaner]']
*/
}


