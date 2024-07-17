package com.monregistreenligne.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.monregistreenligne.models.Fiche;
import com.monregistreenligne.models.Registre;
import com.monregistreenligne.models.User;
import com.monregistreenligne.services.FicheService;
import com.monregistreenligne.services.RegistreService;
import com.monregistreenligne.services.UserService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/fiche/{userId}")
public class FicheController {

    @Autowired
    private FicheService ficheService;

    @Autowired
    private RegistreService registreService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> createFiche(@PathVariable("userId") Long userId, @RequestBody Fiche fiche) {
        User user = userService.findById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        Registre registre = registreService.findOrCreateByUser(user);
        fiche.setRegistreTraitement(registre);

        Fiche savedFiche = ficheService.save(fiche);
        return ResponseEntity.ok().body(savedFiche);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFicheById(@PathVariable("id") Long id) {
        Fiche fiche = ficheService.findById(id);
        if (fiche == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fiche not found");
        }
        return ResponseEntity.ok().body(fiche);
    }

    @GetMapping("/registre/{registreId}")
    public ResponseEntity<?> getFichesByRegistreId(@PathVariable("registreId") Long registreId) {
        List<Fiche> fiches = ficheService.findByRegistreId(registreId);
        return ResponseEntity.ok().body(fiches);
    }

    @GetMapping
    public ResponseEntity<?> getAllFiches() {
        List<Fiche> fiches = ficheService.findAll();
        return ResponseEntity.ok().body(fiches);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFicheById(@PathVariable("id") Long id) {
        Fiche fiche = ficheService.findById(id);
        if (fiche == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fiche not found");
        }

        ficheService.deleteById(id);
        return ResponseEntity.ok().body("Fiche deleted successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFiche(@PathVariable("id") Long id, @RequestBody Fiche ficheDetails) {
        Fiche fiche = ficheService.findById(id);
        if (fiche == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fiche not found");
        }

        fiche.setTraitmentName(ficheDetails.getTraitmentName());
        fiche.setTraitmentCreationDate(ficheDetails.getTraitmentCreationDate());
        fiche.setTraitmentCreationDatePrecision(ficheDetails.getTraitmentCreationDatePrecision());
        fiche.setDestinataireType(ficheDetails.getDestinataireType());
        fiche.setDestinatairesPrecisions(ficheDetails.getDestinatairesPrecisions());
        fiche.setTransferData(ficheDetails.isTransferData());
        fiche.setHorsUEDestinataire(ficheDetails.getHorsUEDestinataire());
        fiche.setHorsUEPays(ficheDetails.getHorsUEPays());
        fiche.setHorsUEGuaranties(ficheDetails.getHorsUEGuaranties());
        fiche.setHorsUEDocumentationLink(ficheDetails.getHorsUEDocumentationLink());
        fiche.setConsentBase(ficheDetails.isConsentBase());
        fiche.setContractBase(ficheDetails.isContractBase());
        fiche.setLegalObligationBase(ficheDetails.isLegalObligationBase());
        fiche.setVitalSaveBase(ficheDetails.isVitalSaveBase());
        fiche.setLegitimateInterestBase(ficheDetails.isLegitimateInterestBase());
        fiche.setPublicInterestBase(ficheDetails.isPublicInterestBase());
        fiche.setSecurity(ficheDetails.getSecurity());
        fiche.setSecurityPrecisions(ficheDetails.getSecurityPrecisions());
        fiche.setFinalitePrincipale(ficheDetails.getFinalitePrincipale());
        fiche.setSousFinalite(ficheDetails.getSousFinalite());
        fiche.setPCcategory(ficheDetails.getPCcategory());
        fiche.setPCcategoryPrecisions(ficheDetails.getPCcategoryPrecisions());

        Fiche updatedFiche = ficheService.save(fiche);
        return ResponseEntity.ok().body(updatedFiche);
    }
}
