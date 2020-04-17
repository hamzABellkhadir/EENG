package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("relve_notes")
public class Relve_notes extends Document{

	private String annee_universitaire;
	private String semestre;
	public Relve_notes() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	


	public Relve_notes(String date_env, String justification, String status, String justification_refus, String date_refus,
			Etudiant etudiant, String annee_universitaire, String semestre) {
		super(date_env, justification, status, justification_refus, date_refus, etudiant);
		super.typedoc="relve_notes";
		this.annee_universitaire = annee_universitaire;
		this.semestre = semestre;
	}





	public String getAnnee_universitaire() {
		return annee_universitaire;
	}
	public void setAnnee_universitaire(String annee_universitaire) {
		this.annee_universitaire = annee_universitaire;
	}
	public String getSemestre() {
		return semestre;
	}
	public void setSemestre(String semestre) {
		this.semestre = semestre;
	}
	
}
