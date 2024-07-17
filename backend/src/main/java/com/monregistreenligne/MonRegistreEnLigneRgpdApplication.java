package com.monregistreenligne;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MonRegistreEnLigneRgpdApplication {

	public static void main(String[] args) {
		SpringApplication.run(MonRegistreEnLigneRgpdApplication.class, args);
	}

}
