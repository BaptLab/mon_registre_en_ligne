package com.monregistreenligne.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.monregistreenligne.models.Registre;
import com.monregistreenligne.models.User;
import com.monregistreenligne.services.RegistreService;
import com.monregistreenligne.services.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class RegistreController {

    @Autowired
    private RegistreService registerService;
    
    @Autowired
    private UserService userService;

    @PostMapping("/{userId}/registre")
    public ResponseEntity<?> createRegistre(@PathVariable("userId") Long userId, @RequestBody Registre registre) {
        // You need to fetch the user by userId here
        // Assuming you have a UserService to fetch the user
        User user = userService.findById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        
        Registre savedRegistre = registerService.findOrCreateByUser(user);
        return ResponseEntity.ok().body(savedRegistre);
    }

    @GetMapping("/{userId}/registre")
    public ResponseEntity<?> findRegistreByUserId(@PathVariable("userId") Long userId) {
        Registre registre = registerService.findByUserId(userId);
        if (registre == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registre not found");
        }
        return ResponseEntity.ok().body(registre);
    }
}
