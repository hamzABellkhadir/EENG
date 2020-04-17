package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Demande_diplome")
public class Demande_diplome extends Document{

	private String type_diplome;

	public Demande_diplome() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Demande_diplome(String date_env, String justification, String status, String justification_refus,
			String date_refus, Etudiant etudiant, String type_diplome) {
		super(date_env, justification, status, justification_refus, date_refus, etudiant);
		super.typedoc="Demande_diplome";
		this.type_diplome = type_diplome;
	}






	public String getType_diplome() {
		return type_diplome;
	}

	public void setType_diplome(String type_diplome) {
		this.type_diplome = type_diplome;
	}
	
}
