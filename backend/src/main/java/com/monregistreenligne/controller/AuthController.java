package com.monregistreenligne.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.monregistreenligne.models.User;
import com.monregistreenligne.payloads.LoginRequest;
import com.monregistreenligne.payloads.LoginResponse;
import com.monregistreenligne.payloads.MessageResponse;
import com.monregistreenligne.payloads.RegisterRequest;
import com.monregistreenligne.services.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
		try {
			User userBasedOnEmail = userService.findByEmail(loginRequest.getEmail());
			System.out.println(loginRequest.getEmail());
			if (userBasedOnEmail == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
			} else {
				LoginResponse loginResponse = userService.loginUser(loginRequest, userBasedOnEmail);
				return ResponseEntity.ok(loginResponse);
			}
		} catch (NumberFormatException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid credentials format");
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect credentials");
		}
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
	    try {
	        // Check if email is already taken
	        if (userService.existsByEmail(registerRequest.getEmail())) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already taken");
	        }

	        // Proceed with registration if email is not taken
	        User user = userService.registerRequestToUser(registerRequest);
	        userService.save(user);
	        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

	    } catch (NumberFormatException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid registration request format");
	    } catch (RuntimeException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
	    }
	}

}