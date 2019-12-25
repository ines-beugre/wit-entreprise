package fr.witentreprise.formation.services;

import fr.witentreprise.formation.exception.BusinessException;
import fr.witentreprise.formation.exception.CodeMessage;
import fr.witentreprise.formation.models.Formation;
import fr.witentreprise.formation.repositories.FormationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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

    /**
     * Get a formation
     * @param id
     * @return a formation
     */
    public Optional<Formation> getById(String id) {
        LOGGER.info("Get a formation");
        return this.formationRepository.findById(id);
    }

    /**
     * Add a new formation
     * @param formation
     * @return a created formation
     */
    public Formation add(Formation formation) {
        LOGGER.info("Create a new formation");
        if (checkIfFormationExist(formation.getName(), formation.getDate())) {
            LOGGER.info("NO CREATION");
           return null;
        } else {
            return formationRepository.save(formation);
        }
    }

    /**
     * Check if formation already exists
     * @param name
     * @param date
     * @return
     */
    public boolean checkIfFormationExist(String name, LocalDate date) {
        List<Formation> formations = formationRepository.findAll();
        LOGGER.info("Checking if formation already exists");

        for (Formation formation: formations) {
            if (name.equals(formation.getName()) && date.equals(formation.getDate())) {
                return true;
            }
        }
        return false;
    }


}
