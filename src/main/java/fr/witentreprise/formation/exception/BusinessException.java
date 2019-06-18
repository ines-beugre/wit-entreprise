package fr.witentreprise.formation.exception;

public class BusinessException extends RuntimeException {

    private final String codeMessage;
    private final String httpStatus;

    public BusinessException(String codeMessage, String httpStatus) {
        this.codeMessage = codeMessage;
        this.httpStatus = httpStatus;
    }


    public String getCodeMessage() {
        return codeMessage;
    }

    public String getHttpStatus() {
        return httpStatus;
    }
}
