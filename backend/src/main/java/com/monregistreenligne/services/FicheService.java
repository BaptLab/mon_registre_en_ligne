package com.monregistreenligne.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.monregistreenligne.models.Fiche;
import com.monregistreenligne.repositories.FicheRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FicheService {

    @Autowired
    private FicheRepository ficheRepository;

    public Fiche save(Fiche fiche) {
        return ficheRepository.save(fiche);
    }

    public Fiche findById(Long id) {
        return ficheRepository.findById(id).orElse(null);
    }

    public List<Fiche> findAll() {
        return ficheRepository.findAll();
    }

    public void deleteById(Long id) {
        ficheRepository.deleteById(id);
    }

    public List<Fiche> findByRegistreId(Long registreId) {
        return ficheRepository.findByRegistreTraitementId(registreId);
    }
}
