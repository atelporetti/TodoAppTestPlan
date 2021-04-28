export class TaskBoardPO {
    private url: string;
    private taskBoard_title_label: string;
    private taskBoard_create_button: string;
    private taskBoard_task_label: string;
    private taskBoard_modal_TitleTask_input: string;
    private taskBoard_modal_CreateTask_button: string;

    constructor() {
        this.url = 'https://simpletaskmanager.slingrs.io/dev/runtime/#views/';
        this.taskBoard_title_label =  '#card-header-title';
        this.taskBoard_create_button =  "//button[contains(@class,'btn-success')]/span[text()='Create']";
        this.taskBoard_task_label = "//span[text()='To Do']/../../div[contains(@class,'card-view')]/div[@class='card']/div[@class='card-body' and text()='TASK_NAME']";
        this.taskBoard_modal_TitleTask_input = "//span[text()='Title']/../../../div[contains(@class,'form-field')]/div/div/div/div/div/div/div/input";
        this.taskBoard_modal_CreateTask_button = "//div[@data-part='modal-body']/div/div/div/div/div/div/div[@id='no-fixed-header']/div/div/div[@id='card-header-actions']/ul/span/button/span[text()='Create']";
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

    public taskBoardModalTitleTaskInput(): WebdriverIO.Element {
        return browser.$(this.taskBoard_modal_TitleTask_input);
    }

    public taskBoardModalCreateTaskButtom(): WebdriverIO.Element {
        return browser.$(this.taskBoard_modal_CreateTask_button);
    }

    public taskBoardTaskLabel(name: string): WebdriverIO.Element {
        return browser.$(this.taskBoard_task_label.replace('TASK_NAME', name));
    }
}
