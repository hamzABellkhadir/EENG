package org.sid.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TYPE_DOC")
public abstract class Document implements Serializable{
	@Id @GeneratedValue
	private Long id_doc;
	
	
	private String date_env;
	
	private String justification;
	private String status;
	private String justification_refus;
	protected  String typedoc;
	
	private String date_refus;
	/*
	  @ManyToMany(fetch = FetchType.LAZY,
	            cascade = {
	                CascadeType.PERSIST,
	                CascadeType.MERGE
	            },
	            mappedBy = "documents")
	private Collection<Etudiant> etudiants;
	*/
	private  String etudiantid;
	 @ManyToOne
	 @JoinColumn(name = "etudiant_apogee")
	 @JsonBackReference
	private Etudiant etudiants;
	
	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	



	public Document(String date_env, String justification, String status, String justification_refus, String date_refus,
			Etudiant etudiants) {
		super();
		this.date_env = date_env;
		this.justification = justification;
		this.status = status;
		this.justification_refus = justification_refus;
		this.date_refus = date_refus;
		this.etudiants = etudiants;
	}







	public Long getId_doc() {
		return id_doc;
	}

	public void setId_doc(Long id_doc) {
		this.id_doc = id_doc;
	}
	
	public String getDate_env() {
		return date_env;
	}

	public void setDate_env(String date_env) {
		this.date_env = date_env;
	}

	public String getJustification() {
		return justification;
	}

	public void setJustification(String justification) {
		this.justification = justification;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getJustification_refus() {
		return justification_refus;
	}

	public void setJustification_refus(String justification_refus) {
		this.justification_refus = justification_refus;
	}

	public String getDate_refus() {
		return date_refus;
	}

	public void setDate_refus(String date_refus) {
		this.date_refus = date_refus;
	}
	public Etudiant getEtudiant() {
		return etudiants;
	}
	
	public void setEtudiant(Etudiant etudiant) {
		this.etudiants = etudiant;
	}
	public String getEtudiantid() {
		return etudiantid;
	}
	public void setEtudiantid(String etudiantid) {
		this.etudiantid = etudiantid;
	}

	public String getTypedoc() {
		return typedoc;
	}

	public void setType_doc(String typedoc) {
		this.typedoc = typedoc;
	}
	
}
