export class TaskBoardPO {
    private url: string;
    private taskBoard_title_label: string;
    private taskBoard_create_button: string;
    private taskBoardToDo_table: string;
    private taskBoard_modal_TitleTask_input: string;
    private taskBoard_modal_CreateTask_button: string;

    constructor() {
        this.url = 'https://simpletaskmanager.slingrs.io/dev/runtime/#views/5c9a9451413c580009d6b68b';
        this.taskBoard_title_label =  '#card-header-title';
        this.taskBoard_create_button =  "//button[contains(@class, 'btn btn-success btn-sm  waves-effect waves-button')]";
        this.taskBoardToDo_table = '//*[@id="5c9a950d413c580009d6b779"]';
        this.taskBoard_modal_TitleTask_input = "//div[1]/div/div/div/div/div/div/form/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div/div/input[@class='form-control fullWidth']";
        this.taskBoard_modal_CreateTask_button = "//span[1]/button[@class='btn btn-success btn-sm  waves-effect waves-button']";
    }

    public validatePage(): void {
        browser.$(this.taskBoard_title_label).waitForExist();
        browser.$(this.taskBoard_create_button).waitForExist();
    }

    public taskBoardUrl(): string {
        return this.url;
    }

    public taskBoardTitleLabel(): WebdriverIO.Element {
        return browser.$(this.taskBoard_title_label);
    }

    public taskBoardCreateButtom(): WebdriverIO.Element {
        return browser.$(this.taskBoard_create_button);
    }

    public taskBoardToDOTable(): WebdriverIO.Element {
        return browser.$(this.taskBoardToDo_table);
    }

    public taskBoardModalTitleTaskInput(): WebdriverIO.Element {
        return browser.$(this.taskBoard_modal_TitleTask_input);
    }

    public taskBoardModalCreateTaskButtom(): WebdriverIO.Element {
        return browser.$(this.taskBoard_modal_CreateTask_button);
    }

}
