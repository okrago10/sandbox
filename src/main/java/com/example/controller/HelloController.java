package com.example.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

	@GetMapping("/hello")
	public Map<String, String> hello() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Hello from Spring Boot!");
		response.put("status", "success");
		return response;
	}

	@GetMapping("/")
	public Map<String, String> welcome() {
		Map<String, String> response = new HashMap<>();
		response.put("message", "Welcome to Spring Boot Demo Application");
		response.put("version", "1.0.0");
		return response;
	}

}
