import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { TaskBoardPO } from '../pages/taskBoardPO';

const taskBoard: TaskBoardPO = new TaskBoardPO();
var title_task = '';

Given(/^user is in Task Board panel$/, () => {
    taskBoard.validatePage();
});

When(/^user clicks on Create button$/, () => {
    taskBoard.taskBoardCreateButtom().click();
});

Then(/^user is able to see the create task modal window$/, () => {
    expect(taskBoard.taskBoardModalTitleTaskInput()).to.exist;
});

When(/^user completes the requiered field with the following information: "(.*?)"$/, (title: string) => {
    title_task = title;
    taskBoard.taskBoardModalTitleTaskInput().setValue(title);
});

When(/^user clicks on create button$/, () => {
    taskBoard.taskBoardModalCreateTaskButtom().waitForExist();
    taskBoard.taskBoardModalCreateTaskButtom().click();
});

Then(/^user is able to see the new task created in 'To Do' column$/, () => {
    taskBoard.taskBoardTaskLabel(title_task).waitForExist();
    expect(taskBoard.taskBoardTaskLabel(title_task).getText()).to.be.equal(title_task);
});