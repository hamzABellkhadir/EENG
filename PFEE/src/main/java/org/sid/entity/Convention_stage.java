package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@DiscriminatorValue("convention_stage")
public class Convention_stage extends Document{

	private String nom_entre;
	private String nom_projet;
	private String email;
	private String ville_entre;
	private String tel_entre;
	
	
	private String date_debut_stage;

	public Convention_stage() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	


	public Convention_stage(String date_env, String justification, String status, String justification_refus,
			String date_refus, Etudiant etudiant, String nom_entre, String nom_projet, String email, String ville_entre,
			String tel_entre, String date_debut_stage) {
		super(date_env, justification, status, justification_refus, date_refus, etudiant);
		super.typedoc="convention_stage";
		this.nom_entre = nom_entre;
		this.nom_projet = nom_projet;
		this.email = email;
		this.ville_entre = ville_entre;
		this.tel_entre = tel_entre;
		this.date_debut_stage = date_debut_stage;
	}






	public String getNom_entre() {
		return nom_entre;
	}

	public void setNom_entre(String nom_entre) {
		this.nom_entre = nom_entre;
	}

	public String getNom_projet() {
		return nom_projet;
	}

	public void setNom_projet(String nom_projet) {
		this.nom_projet = nom_projet;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getVille_entre() {
		return ville_entre;
	}

	public void setVille_entre(String ville_entre) {
		this.ville_entre = ville_entre;
	}

	public String getTel_entre() {
		return tel_entre;
	}

	public void setTel_entre(String tel_entre) {
		this.tel_entre = tel_entre;
	}

	public String getDate_debut_stage() {
		return date_debut_stage;
	}

	public void setDate_debut_stage(String date_debut_stage) {
		this.date_debut_stage = date_debut_stage;
	}
	
	
}
