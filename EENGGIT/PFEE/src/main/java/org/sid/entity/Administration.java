package org.sid.entity;

import java.util.Collection;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
//@DiscriminatorValue("adm")
public class Administration {

	@Id 
	private String n_responsable;
	private String login;
	private String motpass;
	protected String role;
	private String nom;
	private String prenom;
	private String adresse;
	private String email;
	private String n_tel;
	private String image;
	private String cni;
	
	public Administration() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Administration(String n_responsable, String login, String motpass, String nom, String prenom,
			String adresse, String email, String n_tel, String image, String cni) {
		super();
		this.n_responsable = n_responsable;
		this.login = login;
		this.motpass = motpass;
		this.role = "admin";
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.email = email;
		this.n_tel = n_tel;
		this.image = image;
		this.cni = cni;
	}


	public String getN_responsable() {
		return n_responsable;
	}


	public void setN_responsable(String n_responsable) {
		this.n_responsable = n_responsable;
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


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
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
	
	

	

	
	
}
