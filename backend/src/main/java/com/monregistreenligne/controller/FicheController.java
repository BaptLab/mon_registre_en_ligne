package com.monregistreenligne.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.monregistreenligne.DTOs.FicheDTO;
import com.monregistreenligne.models.Fiche;
import com.monregistreenligne.models.Registre;
import com.monregistreenligne.models.User;
import com.monregistreenligne.services.FicheService;
import com.monregistreenligne.services.RegistreService;
import com.monregistreenligne.services.UserService;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

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

		// Ensure traitmentCreationDate is set
		if (fiche.getTraitmentCreationDate() == null) {
			fiche.setTraitmentCreationDate(LocalDate.now());
		}

		Fiche savedFiche = ficheService.save(fiche);
		return ResponseEntity.ok().body(savedFiche);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getFicheById(@PathVariable("userId") Long userId, @PathVariable("id") Long id) {
	    FicheDTO ficheDTO = ficheService.findByIdAndUserId(id, userId);
	    if (ficheDTO == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fiche not found");
	    }
	    return ResponseEntity.ok().body(ficheDTO);
	}


	@GetMapping("/registre/{registreId}")
	public ResponseEntity<?> getFichesByRegistreId(@PathVariable("registreId") Long registreId) {
		List<Fiche> fiches = ficheService.findByRegistreId(registreId);
		return ResponseEntity.ok().body(fiches);
	}

	@GetMapping
	public ResponseEntity<?> getAllFiches(@PathVariable("userId") Long userId) {
	    System.out.println("Received request to get all fiches for userId: " + userId);

	    // Find the registre associated with the userId
	    Registre userRegistre = registreService.findByUserId(userId);
	    System.out.println("Found Registre for userId: " + userId + ", Registre ID: " + userRegistre.getId());

	    // Retrieve the list of fiches associated with the registreId
	    List<Fiche> fiches = ficheService.findByRegistreId(userRegistre.getId());
	    System.out.println("Retrieved " + fiches.size() + " fiches for Registre ID: " + userRegistre.getId());

	    // Map Fiche entities to FicheDTO
	    List<FicheDTO> ficheDTOs = fiches.stream().map(fiche -> {
	        FicheDTO dto = new FicheDTO();
	        dto.setId(fiche.getId());
	        dto.setConsentBase(fiche.isConsentBase());
	        dto.setContractBase(fiche.isContractBase());
	        dto.setFinalitePrincipale(fiche.getFinalitePrincipale());
	        dto.setLegalObligationBase(fiche.isLegalObligationBase());
	        dto.setLegitimateInterestBase(fiche.isLegitimateInterestBase());
	        dto.setPublicInterestBase(fiche.isPublicInterestBase());
	        dto.setTraitmentCreationDate(fiche.getTraitmentCreationDate());
	        dto.setTraitmentCreationDatePrecision(fiche.getTraitmentCreationDatePrecision());
	        dto.setTraitmentName(fiche.getTraitmentName());
	        dto.setTransferData(fiche.isTransferData());
	        dto.setVitalSaveBase(fiche.isVitalSaveBase());
	        dto.setRegistreTraitementId(fiche.getRegistreTraitement().getId());
	        return dto;
	    }).collect(Collectors.toList());

	    // Return the list of FicheDTOs in the response
	    return ResponseEntity.ok().body(ficheDTOs);
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
