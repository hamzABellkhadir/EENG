package org.sid.entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Attestation_scolarite")
public class Attestation_scolarite extends Document{

	public Attestation_scolarite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Attestation_scolarite(String date_env, String justification, String status, String justification_refus,
			String date_refus, Etudiant etudiant) {
		
		super(date_env, justification, status, justification_refus, date_refus, etudiant);
		super.typedoc="Attestation_scolarite";
		// TODO Auto-generated constructor stub
	}

	

}
