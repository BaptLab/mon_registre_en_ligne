package com.monregistreenligne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.monregistreenligne.models.Registre;
import java.util.Optional;

public interface RegistreRepository extends JpaRepository<Registre, Long> {
    Optional<Registre> findByUserId(Long userId);
}
