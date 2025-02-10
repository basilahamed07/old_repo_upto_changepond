package FirstTest.java;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;

import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

public class Home_page {
	
//	@Test
	public void HomePageApiTest() {
		Response responce = get("http://localhost:8888/");
		
		
		System.out.println(responce.getStatusCode());
		System.out.println(responce.getTime());
		System.out.println(responce.getBody().asString());
		System.out.println(responce.getStatusLine());
		System.out.println(responce.getHeader("Content-type"));
		
		
		
	int statuscode = responce.getStatusCode();
		
		Assert.assertEquals(statuscode, 200);
	}
	
//	@Test// working
	public void UserPage() {
		
		baseURI = "http://localhost:8888/";
		given().get("users").then().statusCode(200).body("[0].username",equalTo("sandeep")).log().all();
	}
	
//@Test // working  putting post request
	public void POSTRequest() {
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject request = new JSONObject(map);
		request.put("name","Monica");
		request.put("job","Trainer");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888";
		
		given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).post("/users").then().statusCode(201).log().all();
	}
	
	
	
//	@Test  //working put request
	public void PutRuest() {
	
		JSONObject request = new JSONObject();
		
		request.put("username","basil");
		request.put("userpassword","basilbasil");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).put("users/1").then().statusCode(200).log().all();
	}
	
	
//	@Test //working patchrequest
	public void patchrequest() {
	
		JSONObject request = new JSONObject();
		
		request.put("username","tempuser");
		request.put("password","1234567890");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).patch("users/3").then().statusCode(200).log().all();
	}
	 
//	@Test // delite working
	public void DelRequest() {
		baseURI="http://localhost:8888";
		when().delete("/contact/6e12").then().statusCode(200).log().all();
	}
	}

