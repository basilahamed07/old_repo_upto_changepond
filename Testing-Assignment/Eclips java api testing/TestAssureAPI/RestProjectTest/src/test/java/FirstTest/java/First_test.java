package FirstTest.java;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import io.restassured.response.Response;


import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;



public class First_test {
	
//	@Test
	public void GETApiTest() {
		
		
		
		Response responce = get("https://reqres.in/api/users?page=2");
		
		System.out.println(responce.getStatusCode());
		System.out.println(responce.getTime());
		System.out.println(responce.getBody().asString());
		System.out.println(responce.getStatusLine());
		System.out.println(responce.getHeader("Content-type"));
		
		int statuscode = responce.getStatusCode();
		
		Assert.assertEquals(statuscode, 201);
		
	}

	//BDD FUNCTION
	
	@Test
	public void GetApi2() {
		
		baseURI = "https://reqres.in/api";
		given().get("/user?page=2").then().statusCode(200).body("data[1].id", equalTo(8)).log().all();
		given().get("/user?page=2").then().statusCode(200).body("data[0].name", equalTo("sand dollar"));
	}

}
