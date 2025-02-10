package FirstTest.java;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import java.util.Map;
import java.util.HashMap;


public class test_get_and_post {

//	@Test
	public void GetRequest() {
		//validating 1
		baseURI="https://reqres.in/api";
		given().get("/unknown").then().statusCode(200).body("data[0].id", equalTo(1)).log().all();
		
		//validating 2
		given().get("/unknown").then().statusCode(200).body("data[0].name", equalTo("fuchsia rose")).body("data[1].id", equalTo(2)).log().all();
	}
	
//	@Test
	public void getRequest2() {
		baseURI="https://reqres.in/api";
		given().get("/users?page=2").then().statusCode(200).body("data.first_name", hasItems("Lindsay","Tobias"));
	}
	@Test
	
	public void POSTRequest() {
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject request = new JSONObject(map);
		request.put("name","Monica");
		request.put("job","Trainer");
		
		System.out.println(request.toJSONString());
		
		baseURI="https://reqres.in/api";
		
		given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).post("/uesrs").then().statusCode(201).log().all();
	}
}
