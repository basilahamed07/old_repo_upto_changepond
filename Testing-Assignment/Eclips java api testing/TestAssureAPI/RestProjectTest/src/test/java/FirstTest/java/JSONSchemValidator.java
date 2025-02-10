package FirstTest.java;

import static io.restassured.RestAssured.baseURI;

import static io.restassured.RestAssured.*;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static io.restassured.matcher.RestAssuredMatchers.*;
import io.restassured.http.ContentType;;
public class JSONSchemValidator {

	
	@Test
	public void testGET() {
		baseURI = "http://localhost:8888";
		
		given().get("/users").then().assertThat().body(matchesJsonSchemaInClasspath("schema.json")).statusCode(200);
	}
}
