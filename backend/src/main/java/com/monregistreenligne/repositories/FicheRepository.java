package com.monregistreenligne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.monregistreenligne.models.Fiche;



@Repository
public interface FicheRepository extends JpaRepository<Fiche, Long>{


}