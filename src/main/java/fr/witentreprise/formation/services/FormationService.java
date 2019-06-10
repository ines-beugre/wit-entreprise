package fr.witentreprise.formation.services;

import fr.witentreprise.formation.models.Formation;
import fr.witentreprise.formation.repositories.FormationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormationService {
    Logger LOGGER = LoggerFactory.getLogger(FormationService.class);

    @Autowired
    FormationRepository formationRepository;

    /**
     * Get All formations
     *
     * @return a List of formation
     */
    public List<Formation> list() {
        LOGGER.info("List all Formations");
        return this.formationRepository.findAll();
    }
}
