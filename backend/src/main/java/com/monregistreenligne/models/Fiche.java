package com.monregistreenligne.models;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.time.LocalDate;
import java.util.List;


import lombok.Data;

@Entity
@Data
@Table(name = "fiche_traitement")
public class Fiche {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "registre_traitement_id", nullable = false)
    private Registre registreTraitement;

    @Column(nullable = false)
    private String traitmentName;

    @Column(nullable = false)
    private LocalDate traitmentCreationDate = LocalDate.now(); // Ensure default value

    private String traitmentCreationDatePrecision;

    @ElementCollection
    private List<String> destinataireType;

    @ElementCollection
    private List<String> destinatairesPrecisions;

    private boolean transferData;

    @ElementCollection
    private List<String> horsUEDestinataire;

    @ElementCollection
    private List<String> horsUEPays;

    @ElementCollection
    private List<String> horsUEGuaranties;

    @ElementCollection
    private List<String> horsUEDocumentationLink;

    private boolean consentBase;

    private boolean contractBase;

    private boolean legalObligationBase;

    private boolean vitalSaveBase;

    private boolean legitimateInterestBase;

    private boolean publicInterestBase;

    @ElementCollection
    private List<String> security;

    @ElementCollection
    private List<String> securityPrecisions;

    private String finalitePrincipale;

    @ElementCollection
    private List<String> sousFinalite;

    @ElementCollection
    private List<String> PCcategory;

    @ElementCollection
    private List<String> PCcategoryPrecisions;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Registre getRegistreTraitement() {
		return registreTraitement;
	}

	public void setRegistreTraitement(Registre registreTraitement) {
		this.registreTraitement = registreTraitement;
	}

	public String getTraitmentName() {
		return traitmentName;
	}

	public void setTraitmentName(String traitmentName) {
		this.traitmentName = traitmentName;
	}

	public LocalDate getTraitmentCreationDate() {
		return traitmentCreationDate;
	}

	public void setTraitmentCreationDate(LocalDate traitmentCreationDate) {
		this.traitmentCreationDate = traitmentCreationDate;
	}

	public String getTraitmentCreationDatePrecision() {
		return traitmentCreationDatePrecision;
	}

	public void setTraitmentCreationDatePrecision(String traitmentCreationDatePrecision) {
		this.traitmentCreationDatePrecision = traitmentCreationDatePrecision;
	}

	public List<String> getDestinataireType() {
		return destinataireType;
	}

	public void setDestinataireType(List<String> destinataireType) {
		this.destinataireType = destinataireType;
	}

	public List<String> getDestinatairesPrecisions() {
		return destinatairesPrecisions;
	}

	public void setDestinatairesPrecisions(List<String> destinatairesPrecisions) {
		this.destinatairesPrecisions = destinatairesPrecisions;
	}

	public boolean isTransferData() {
		return transferData;
	}

	public void setTransferData(boolean transferData) {
		this.transferData = transferData;
	}

	public List<String> getHorsUEDestinataire() {
		return horsUEDestinataire;
	}

	public void setHorsUEDestinataire(List<String> horsUEDestinataire) {
		this.horsUEDestinataire = horsUEDestinataire;
	}

	public List<String> getHorsUEPays() {
		return horsUEPays;
	}

	public void setHorsUEPays(List<String> horsUEPays) {
		this.horsUEPays = horsUEPays;
	}

	public List<String> getHorsUEGuaranties() {
		return horsUEGuaranties;
	}

	public void setHorsUEGuaranties(List<String> horsUEGuaranties) {
		this.horsUEGuaranties = horsUEGuaranties;
	}

	public List<String> getHorsUEDocumentationLink() {
		return horsUEDocumentationLink;
	}

	public void setHorsUEDocumentationLink(List<String> horsUEDocumentationLink) {
		this.horsUEDocumentationLink = horsUEDocumentationLink;
	}

	public boolean isConsentBase() {
		return consentBase;
	}

	public void setConsentBase(boolean consentBase) {
		this.consentBase = consentBase;
	}

	public boolean isContractBase() {
		return contractBase;
	}

	public void setContractBase(boolean contractBase) {
		this.contractBase = contractBase;
	}

	public boolean isLegalObligationBase() {
		return legalObligationBase;
	}

	public void setLegalObligationBase(boolean legalObligationBase) {
		this.legalObligationBase = legalObligationBase;
	}

	public boolean isVitalSaveBase() {
		return vitalSaveBase;
	}

	public void setVitalSaveBase(boolean vitalSaveBase) {
		this.vitalSaveBase = vitalSaveBase;
	}

	public boolean isLegitimateInterestBase() {
		return legitimateInterestBase;
	}

	public void setLegitimateInterestBase(boolean legitimateInterestBase) {
		this.legitimateInterestBase = legitimateInterestBase;
	}

	public boolean isPublicInterestBase() {
		return publicInterestBase;
	}

	public void setPublicInterestBase(boolean publicInterestBase) {
		this.publicInterestBase = publicInterestBase;
	}

	public List<String> getSecurity() {
		return security;
	}

	public void setSecurity(List<String> security) {
		this.security = security;
	}

	public List<String> getSecurityPrecisions() {
		return securityPrecisions;
	}

	public void setSecurityPrecisions(List<String> securityPrecisions) {
		this.securityPrecisions = securityPrecisions;
	}

	public String getFinalitePrincipale() {
		return finalitePrincipale;
	}

	public void setFinalitePrincipale(String finalitePrincipale) {
		this.finalitePrincipale = finalitePrincipale;
	}

	public List<String> getSousFinalite() {
		return sousFinalite;
	}

	public void setSousFinalite(List<String> sousFinalite) {
		this.sousFinalite = sousFinalite;
	}

	public List<String> getPCcategory() {
		return PCcategory;
	}

	public void setPCcategory(List<String> pCcategory) {
		PCcategory = pCcategory;
	}

	public List<String> getPCcategoryPrecisions() {
		return PCcategoryPrecisions;
	}

	public void setPCcategoryPrecisions(List<String> pCcategoryPrecisions) {
		PCcategoryPrecisions = pCcategoryPrecisions;
	}

   
}


