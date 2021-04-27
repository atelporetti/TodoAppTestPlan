import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { TaskBoardPO } from '../pages/taskBoardPO';

const taskBoard: TaskBoardPO = new TaskBoardPO();

Given(/^Task Board is displayed$/, () => {
    taskBoard.validatePage();

    taskBoard.taskBoardCreateButtom().click();
    taskBoard.taskBoardModalTitleTaskInput().setValue('title');
    taskBoard.taskBoardModalCreateTaskButtom().click();
    expect(browser.getUrl()).to.be.equal(taskBoard.taskBoardUrl());
});

When(/^press the 'Create' button$/, () => {
    taskBoard.taskBoardCreateButtom().click();
});

When(/^opens create task window$/, () => {
    taskBoard.taskBoardTitleLabel().waitForExist();
});

When(/^task title field is completed with "(.*?)"$/, (title: string) => {
    taskBoard.taskBoardModalTitleTaskInput().setValue(title);
});

When(/^press the 'Create' button$/, () => {
    taskBoard.taskBoardModalCreateTaskButtom().click();
});

Then(/^task is displayed in 'To DO' column$/, () => {
    expect(browser.getUrl()).to.be.equal(taskBoard.taskBoardUrl());
});