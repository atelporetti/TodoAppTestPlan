import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { TaskBoardPO } from '../pages/taskBoardPO';

const taskBoard: TaskBoardPO = new TaskBoardPO();
var title_task = '';

Given(/^Task Board is displayed$/, () => {
    taskBoard.validatePage();
});

When(/^clicks on the Create button$/, () => {
    taskBoard.taskBoardCreateButtom().click();
});

When(/^opens create task window$/, () => {
    taskBoard.taskBoardTitleLabel().waitForExist();
});

When(/^task title field is completed with "(.*?)"$/, (title: string) => {
    title_task = title;
    taskBoard.taskBoardModalTitleTaskInput().setValue(title);
});

When(/^press the Create button$/, () => {
    taskBoard.taskBoardModalCreateTaskButtom().waitForExist();
    taskBoard.taskBoardModalCreateTaskButtom().click();
});

Then(/^task is displayed in 'To Do' column$/, () => {
    taskBoard.taskBoardTaskLabel(title_task).waitForExist();
    expect(taskBoard.taskBoardTaskLabel(title_task).getText()).to.be.equal(title_task);
});