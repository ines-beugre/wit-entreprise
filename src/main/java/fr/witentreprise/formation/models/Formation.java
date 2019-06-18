package fr.witentreprise.formation.models;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Formation {

    @Id
    private String id;
    private String name;
    private LocalDate date;
    private String place;
    private String price;
    private String target;
    private LocalDate deadline;
    private List<Person> formers;
    private List<Person> suscribers;
    private String goals;
    private String description;
    private List<Module> modules;
    private String theme;
    private String image;

    public Formation() {
        formers = new ArrayList<>();
        suscribers = new ArrayList<>();
        modules = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public List<Person> getFormers() {
        return formers;
    }

    public void setFormers(List<Person> formers) {
        this.formers = formers;
    }

    public List<Person> getSuscribers() {
        return suscribers;
    }

    public void setSuscribers(List<Person> suscribers) {
        this.suscribers = suscribers;
    }

    public String getGoals() {
        return goals;
    }

    public void setGoals(String goals) {
        this.goals = goals;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Module> getModules() {
        return modules;
    }

    public void setModules(List<Module> modules) {
        this.modules = modules;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Formation{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", date=" + date +
                ", place='" + place + '\'' +
                ", price='" + price + '\'' +
                ", target='" + target + '\'' +
                ", deadline=" + deadline +
                ", formers=" + formers +
                ", suscribers=" + suscribers +
                ", goals='" + goals + '\'' +
                ", description='" + description + '\'' +
                ", modules=" + modules +
                ", theme='" + theme + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
