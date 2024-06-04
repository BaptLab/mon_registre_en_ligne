package com.monregistreenligne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.monregistreenligne.models.Registre;


@Repository
public interface RegistreRepository extends JpaRepository<Registre, Long>{


}