package fr.witentreprise.formation.exception;

public enum CodeMessage {

    //Formation
    XAA("XAA", "Formation'id is not valid"),
    XAB("XAB", "Formation'id is not valid");

    //Person

    private String code;
    private String message;


    CodeMessage(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
