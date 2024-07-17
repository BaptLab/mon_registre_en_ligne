package com.monregistreenligne.services;

import org.springframework.stereotype.Service;
import com.monregistreenligne.models.Registre;
import com.monregistreenligne.models.User;
import com.monregistreenligne.repositories.RegistreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

@Service
public class RegistreService {

    @Autowired
    private RegistreRepository registreRepository;

    public Registre findById(Long id) {
        return this.registreRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        this.registreRepository.deleteById(id);
    }

    public Registre save(Registre registre) {
        return this.registreRepository.save(registre);
    }

    public Registre findByUserId(Long userId) {
        Optional<Registre> registre = this.registreRepository.findByUserId(userId);
        return registre.orElse(null);
    }

    public Registre findOrCreateByUser(User user) {
        Optional<Registre> optionalRegistre = registreRepository.findByUserId(user.getId());
        if (optionalRegistre.isPresent()) {
            return optionalRegistre.get();
        } else {
            Registre newRegistre = new Registre();
            newRegistre.setUser(user);
            return registreRepository.save(newRegistre);
        }
    }
}
