package fr.witentreprise.formation.controllers;

import fr.witentreprise.formation.exception.BusinessException;
import fr.witentreprise.formation.exception.CodeMessage;
import fr.witentreprise.formation.models.Formation;
import fr.witentreprise.formation.services.FormationService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("${base.api.path}/formations")
public class FormationController {

    @Autowired
    FormationService formationService;

    /**
     * Get all formations
     *
     * @return a list of formation
     */
    @GetMapping
    @ApiOperation(httpMethod = "GET",
            value = "Resource to get all formations",
            response = Formation.class,
            produces = MediaType.APPLICATION_JSON_VALUE,
            responseContainer = "List")
    public ResponseEntity<List<Formation>> list() {
        return ResponseEntity.ok().body(formationService.list());
    }

    @GetMapping(value = "{id}")
    @ApiOperation(httpMethod = "GET",
            value = "Resource to get a formation",
            response = Formation.class,
            produces = MediaType.APPLICATION_JSON_VALUE,
            responseContainer = "Object")
    public ResponseEntity<Formation> getById(@PathVariable("id") String id) {

        Formation formation = formationService.getById(id)
                .orElseThrow(() -> new BusinessException("", CodeMessage.XAB.getCode()));
        return ResponseEntity.ok().body(formation);

    }
}
