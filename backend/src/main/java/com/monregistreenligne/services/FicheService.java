package com.monregistreenligne.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.monregistreenligne.DTOs.FicheDTO;
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

    public FicheDTO findByIdAndUserId(Long id, Long userId) {
        Optional<Fiche> ficheOptional = ficheRepository.findByIdAndRegistreTraitement_UserId(id, userId);
        if (ficheOptional.isPresent()) {
            Fiche fiche = ficheOptional.get();
            return convertToDto(fiche);
        } else {
            return null; // or throw a custom exception if preferred
        }
    }

    private FicheDTO convertToDto(Fiche fiche) {
        FicheDTO ficheDTO = new FicheDTO();
        ficheDTO.setId(fiche.getId());
        ficheDTO.setConsentBase(fiche.isConsentBase());
        ficheDTO.setContractBase(fiche.isContractBase());
        ficheDTO.setFinalitePrincipale(fiche.getFinalitePrincipale());
        ficheDTO.setLegalObligationBase(fiche.isLegalObligationBase());
        ficheDTO.setLegitimateInterestBase(fiche.isLegitimateInterestBase());
        ficheDTO.setPublicInterestBase(fiche.isPublicInterestBase());
        ficheDTO.setTraitmentCreationDate(fiche.getTraitmentCreationDate());
        ficheDTO.setTraitmentCreationDatePrecision(fiche.getTraitmentCreationDatePrecision());
        ficheDTO.setTraitmentName(fiche.getTraitmentName());
        ficheDTO.setTransferData(fiche.isTransferData());
        ficheDTO.setVitalSaveBase(fiche.isVitalSaveBase());
        ficheDTO.setRegistreTraitementId(fiche.getRegistreTraitement().getId());
        // Map other fields if needed
        return ficheDTO;
    }
}
