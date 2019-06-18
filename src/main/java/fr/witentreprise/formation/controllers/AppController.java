package fr.witentreprise.formation.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("${base.api.path}/app")
public class AppController {


    @Value( "${build.version}" )
    private String version;

    @Value(("${application.name}"))
    private String name ;

    @Value(("${application.description}"))
    private String description ;


    @GetMapping("")
    public Map<String,String> getInfo() {
        HashMap<String,String> info = new HashMap<>();
        info.put("Version",version);
        info.put("Application",name);
        info.put("Description",description);
        info.put("by","Ines");
        return info;
    }
}
