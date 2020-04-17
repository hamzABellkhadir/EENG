package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Demande_stage")
public class Demande_stage extends Document{

	public Demande_stage() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Demande_stage(String date_env, String justification, String status, String justification_refus,
			String date_refus, Etudiant etudiant) {
		super(date_env, justification, status, justification_refus, date_refus, etudiant);
		super.typedoc="Demande_stage";
		// TODO Auto-generated constructor stub
	}

	
	
	
}
