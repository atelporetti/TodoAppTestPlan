export class LoginPO {
    private url: string;
    private login_email_input: string;
    private login_password_input: string;
    private login_login_button: string;

    constructor() {
        this.url = 'https://simpletaskmanager.slingrs.io/dev/runtime/login.html';
        this.login_email_input = '#email';
        this.login_password_input = '#password';
        this.login_login_button = 'button=Login';
    }

    public validatePage(): void {
        browser.$(this.login_email_input).waitForExist();
        browser.$(this.login_password_input).waitForExist();
        browser.$(this.login_login_button).waitForExist();
    }

    public loginUrl(): string {
        return this.url;
    }
    
    public loginEmailInput(): WebdriverIO.Element {
        return browser.$(this.login_email_input);
    }

    public loginPasswordInput(): WebdriverIO.Element {
        return browser.$(this.login_password_input);
    }

    public loginLoginButtom(): WebdriverIO.Element {
        return browser.$(this.login_login_button);
    }

}
