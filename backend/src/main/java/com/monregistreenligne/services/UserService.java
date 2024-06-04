package com.monregistreenligne.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.monregistreenligne.DTOs.UserDTO;
import com.monregistreenligne.models.User;
import com.monregistreenligne.payloads.LoginRequest;
import com.monregistreenligne.payloads.LoginResponse;
import com.monregistreenligne.payloads.RegisterRequest;
import com.monregistreenligne.repositories.UserRepository;
import com.monregistreenligne.utils.JwtUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	@Autowired
	private UserRepository userRepository;

	static private JwtUtils jwtUtils;

	public User authenticate(String email, String password) {
		User user = userRepository.findByEmail(email);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		} else {
			return null;
		}
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public User findById(Long id) {
		return this.userRepository.findById(id).orElse(null);
	}

	public void delete(Long id) {
		this.userRepository.deleteById(id);
	}

	public User save(User user) {
		return this.userRepository.save(user);
	}

	public List<User> findAll() {
		return this.userRepository.findAll();
	}

	public User findByEmail(String email) {

		return userRepository.findByEmail(email);
	}

	public UserDTO userToDTO(User user) {
		UserDTO userDTO = new UserDTO();
		userDTO.setEmail(user.getEmail());
		return userDTO;
	}

	public LoginResponse loginUser(LoginRequest loginRequest, User user) {
		if (JwtUtils.isPwdMatching(loginRequest, user)) {
			Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(),
					user.getPassword());
			String token = JwtUtils.generateToken(authentication);
			LoginResponse loginResponse = new LoginResponse(token, user.getEmail(), user.getId());
			return loginResponse;
		} else {
			return null;
		}
	}

	public boolean isEmailValid(String email) {
		return email != null && email.matches("\\S+@\\S+\\.\\S+");
	}

	public boolean isPasswordValid(String password) {
		return password != null
				&& password.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
	}

	public boolean isUsernameValid(String username) {
		return username != null && username.length() >= 8;
	}

	public User registerRequestToUser(RegisterRequest registerRequest) {
		User user = new User();
		user.setEmail(registerRequest.getEmail());
		String encryptedPwd = JwtUtils.pwdEncoder(registerRequest.getPassword());
		user.setPassword(encryptedPwd);
		return user;
	}

	public boolean existsByEmail(String email) {
	    return userRepository.existsByEmail(email);
	}

}
