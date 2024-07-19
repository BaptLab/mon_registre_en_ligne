package com.monregistreenligne.DTOs;

import java.time.LocalDate;

public class FicheDTO {
	private Long id;
	private boolean consentBase;
	private boolean contractBase;
	private String finalitePrincipale;
	private boolean legalObligationBase;
	private boolean legitimateInterestBase;
	private boolean publicInterestBase;
	private LocalDate traitmentCreationDate;
	private String traitmentCreationDatePrecision;
	private String traitmentName;
	private boolean transferData;
	private boolean vitalSaveBase;
	private Long registreTraitementId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getFinalitePrincipale() {
		return finalitePrincipale;
	}
	public void setFinalitePrincipale(String finalitePrincipale) {
		this.finalitePrincipale = finalitePrincipale;
	}
	public boolean isLegalObligationBase() {
		return legalObligationBase;
	}
	public void setLegalObligationBase(boolean legalObligationBase) {
		this.legalObligationBase = legalObligationBase;
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
	public String getTraitmentName() {
		return traitmentName;
	}
	public void setTraitmentName(String traitmentName) {
		this.traitmentName = traitmentName;
	}
	public boolean isTransferData() {
		return transferData;
	}
	public void setTransferData(boolean transferData) {
		this.transferData = transferData;
	}
	public boolean isVitalSaveBase() {
		return vitalSaveBase;
	}
	public void setVitalSaveBase(boolean vitalSaveBase) {
		this.vitalSaveBase = vitalSaveBase;
	}
	public Long getRegistreTraitementId() {
		return registreTraitementId;
	}
	public void setRegistreTraitementId(Long registreTraitementId) {
		this.registreTraitementId = registreTraitementId;
	}

}
