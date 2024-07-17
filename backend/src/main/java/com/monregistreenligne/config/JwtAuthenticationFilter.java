package com.monregistreenligne.config;

import java.io.IOException;


import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.monregistreenligne.utils.JwtUtils;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        Authentication authentication = JwtUtils.getAuthentication(JwtUtils.extractToken(request));
        if (request.getHeader("Authorization") == null) {
            System.out.println("BLOCKED");
            filterChain.doFilter(request, response);
            return;
        } else if (com.monregistreenligne.utils.JwtUtils.isTokenValid(authentication)) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            filterChain.doFilter(request, response);
        } else {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("Unauthorized access");
        }
    }
}
