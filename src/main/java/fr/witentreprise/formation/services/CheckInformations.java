package fr.witentreprise.formation.services;

import fr.witentreprise.formation.FormationApplication;
import fr.witentreprise.formation.exception.BusinessException;
import fr.witentreprise.formation.models.Formation;
import fr.witentreprise.formation.repositories.FormationRepository;

import java.util.Optional;

public class CheckInformations {

    FormationRepository formationRepository;
    Formation formation;

    /*public Optional <String> checkInfoExist (Formation formation) {
        Optional<Formation> byName = formationRepository.findByName(formation.getName());
        if(byName.isPresent()) {
            throw new BusinessException()
        }
        return null;
    }*/
}
