package com.monregistreenligne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.monregistreenligne.models.Fiche;

import java.util.List;
import java.util.Optional;

@Repository
public interface FicheRepository extends JpaRepository<Fiche, Long> {
	List<Fiche> findByRegistreTraitementId(Long registreTraitementId);
	Optional<Fiche> findByIdAndRegistreTraitement_UserId(Long id, Long userId);
}
