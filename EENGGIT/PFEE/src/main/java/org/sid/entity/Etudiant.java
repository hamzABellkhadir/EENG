package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity

public class Etudiant {
	@Id 
	private String n_apogee;
	
	private String login;
	private String motpass;
	private String role;
	private String nom;
	private String prenom;
	private String adresse;
	private String email;
	private String n_tel;
	private String image;
	private String cni;
		
	private String cne;
	private String dapartement;
	private String filiere;
	private String Annee_universitaire;
	
	
	@OneToMany(targetEntity=Document.class,
			mappedBy = "etudiants",
			fetch = FetchType.LAZY,
			cascade = CascadeType.ALL)
	@JsonBackReference
	private Collection<Document> documents;




	public Etudiant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Etudiant(String n_apogee ,String motpass, String nom, String prenom, String adresse, String email,
			String n_tel, String image, String cni, String login , String cne, String dapartement, String filiere,
			String annee_universitaire) {
		super();
		this.login = login;
		this.motpass = motpass;
		this.role = "etudiant";
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.email = email;
		this.n_tel = n_tel;
		this.image = image;
		this.cni = cni;
		this.n_apogee = n_apogee;
		this.cne = cne;
		this.dapartement = dapartement;
		this.filiere = filiere;
		Annee_universitaire = annee_universitaire;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMotpass() {
		return motpass;
	}

	public void setMotpass(String motpass) {
		this.motpass = motpass;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getN_tel() {
		return n_tel;
	}

	public void setN_tel(String n_tel) {
		this.n_tel = n_tel;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCni() {
		return cni;
	}

	public void setCni(String cni) {
		this.cni = cni;
	}

	public String getN_apogee() {
		return n_apogee;
	}

	public void setN_apogee(String n_apogee) {
		this.n_apogee = n_apogee;
	}

	public String getCne() {
		return cne;
	}

	public void setCne(String cne) {
		this.cne = cne;
	}

	public String getDapartement() {
		return dapartement;
	}

	public void setDapartement(String dapartement) {
		this.dapartement = dapartement;
	}

	public String getFiliere() {
		return filiere;
	}

	public void setFiliere(String filiere) {
		this.filiere = filiere;
	}

	public String getAnnee_universitaire() {
		return Annee_universitaire;
	}

	public void setAnnee_universitaire(String annee_universitaire) {
		Annee_universitaire = annee_universitaire;
	}

	public Collection<Document> getDocuments() {
		return documents;
	}

	public void setDocuments(Collection<Document> documents) {
		this.documents = documents;
	}

	public String getRole() {
		return role;
	}

	
	


	
	
}
