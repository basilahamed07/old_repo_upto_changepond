package checking.rent_car;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Scanner;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;


class create_acount_rent_carTest {
	
	create_acount_rent_car rent = new create_acount_rent_car();
	Scanner sc = new Scanner(System.in);
	
	
	//first_name checking
	//case_1
	@Test
	void first_name1() {
		System.out.println("Enter the First Name");
		String First_names = sc.next();
		if(First_names.length() < 16 && First_names.length() > 0) {
//			System.out.println("inside the condiction");
			assertEquals(First_names,rent.First_name(First_names));
			
		}
		else {
			assertFalse(First_names.length() > 16);
		}
	}
	
	
	
	//case_2
	@Test
		void first_name2() {
			System.out.println("Enter the First Name");
			String First_names = sc.next();
			if(First_names.length() < 16 && First_names.length() > 3) {
//				System.out.println("inside the condiction");
				assertEquals(First_names,rent.First_name(First_names));
			}
			else {
				assertFalse(First_names.length() > 16 || First_names.length() < 3 || First_names == "");
			}
		}
	
	
	
	//checking second name
	@Test
	void Second_name1() {
		System.out.println("Enter the Second Name");
		String Second_name = sc.next();
		if(Second_name.length() < 16 && Second_name.length() > 3) {
//			System.out.println("inside the condiction");
			assertEquals(Second_name,rent.First_name(Second_name));
		}
		else {
			assertFalse(Second_name.length() > 16 || Second_name.length() < 3 || Second_name == "");
		}
	}
	
	
	//checking username
	
	@Test
	void Username1() {
		System.out.println("Enter the Username:");
		String username = sc.next();
		boolean flage = false;
		char[] checking = username.toCharArray();
		for(int i = 0; username.length() > i; i++ ) {
			if(checking[i]=='@') {
			assertFalse(checking[i] == '@');
			flage = true;
			break;}
		}
		if(flage==false) {
			assertEquals(username, rent.Second_name(username));
		}
	}
	
	
	//checkinh case 2 for usernames
	@Test
	void Username2() {
		System.out.println("Enter the Username:");
		String username = sc.next();
		boolean flage = false;
		char[] checking = username.toCharArray();
		for(int i = 0; username.length() > i; i++ ) {
			if(checking[i]=='@' || checking[i] == ' ') {
				System.out.println("inside");
			assertFalse(checking[i] == '@' || checking[i] == ' ');
			flage = true;
			break;}
		}
		if(flage==false) {
			assertEquals(username, rent.Second_name(username));
		}
	}
	
	
	//common function
	
	//email function ---------------------------------------------------------------
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
	
	//number function------------------------------------------------------------------
	public boolean number_checking(long numbersss) {
		if(numbersss > 6666666666l && numbersss < 9999999999l) {
			return true;
		}
		return false;
	}
	
	
	// validating email
	@Test
	void emailcheck1() {
		System.out.println("Enter the valid emailid :");
		String email = sc.next();
		String final_email =  email_check(email);
		if (final_email == email){
			assertEquals(final_email,rent.email_id(email));
		}
		else if (final_email == null) {
			assertFalse(final_email != email);
		}
	}
	
	// checking number for indian number only
	@Test
	void number_check() {
		System.out.println("Enter the valid numbers :");
		long numbers = sc.nextLong();
		boolean final_number = number_checking(numbers);
		if(final_number == true) {
			assertEquals(numbers,rent.phoneNumber(numbers));
		}
		else {
			assertFalse(numbers > 6666666666l && numbers < 9999999999l);
		}
	}
	
	//validating address not empty
	@Test
	void address(){
		System.out.println("Enter the valid Address:");
		String Address = sc.next();
		if(Address.length()!= 0) {
			assertEquals(Address, rent.address_checking(Address));
		}
		else {
			assertFalse(Address.length()==0);
		}
	}
	
	
	//password_checking
	
	@Test
	void password() {
		System.out.println("Enter the valid passsword:");
		String password = sc.next();
		if(password.length() != 8) {
			assertFalse(password.length()!=0);
		}
		else {
			assertEquals(password, rent.password_checking(password));
		}
	}
	
	
	
	TestInfo testinfo;
	TestReporter TestReporter;
	
	@Test
	@Tag("emailcheck1")
	@Tag("Username1")
	@Tag("Username2")
	@Tag("address")
	@Tag("first_name1")
	@Tag("first_name2")
	@Tag("Second_name1")
	@Tag("password")
	@Tag("number_check")
void init(TestInfo testinfo, TestReporter TestReporter) {
		this.testinfo = testinfo;
		this.TestReporter = TestReporter;
		TestReporter.publishEntry("the testin for the rent_a_car our project was success" + testinfo.getTags());
	}

}


//report for final testing

/*Enter the valid emailid :
basilahamed46@gmail.com
Enter the Username:
basil46
Enter the Username:
basilahamed46
Enter the valid Address:
chennai
Enter the First Name
basil
Enter the First Name
basilaha
Enter the Second Name
ahamed
TestIdentifier [init(TestInfo, TestReporter)]
ReportEntry [timestamp = 2024-07-08T19:02:00.258989500, value = 'the testin for the rent_a_car our project was success[emailcheck1, Username1, Username2, address, first_name1, first_name2, Second_name1, password, number_check]']
Enter the valid passsword:
basilaha
Enter the valid numbers :
7397061751
*/


