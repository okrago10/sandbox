package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class DemoApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void contextLoads() {
	}

	@Test
	void testHelloEndpoint() throws Exception {
		mockMvc.perform(get("/api/hello"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.message").value("Hello from Spring Boot!"))
				.andExpect(jsonPath("$.status").value("success"));
	}

	@Test
	void testWelcomeEndpoint() throws Exception {
		mockMvc.perform(get("/api/"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.message").value("Welcome to Spring Boot Demo Application"))
				.andExpect(jsonPath("$.version").value("1.0.0"));
	}

}
