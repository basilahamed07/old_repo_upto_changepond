package FirstTest.java;


import static io.restassured.RestAssured.*;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import static io.restassured.matcher.RestAssuredMatchers.*;
import io.restassured.http.ContentType;;
public class Put_Patch_Del_request {
	@Test
	public void PutRuest() {
	
		JSONObject request = new JSONObject();
		
		request.put("name","Monica");
		request.put("job","Trainer");
		
		System.out.println(request.toJSONString());
		
		baseURI="https://reqres.in/api";
		
		given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).put("/uesrs/2").then().statusCode(200).log().all();
	}
	
//	@Test
	public void DelRequest() {
		baseURI="https://reqres.in";
		when().delete("/api/users?page=2").then().statusCode(204).log().all();
	}
	}
	

