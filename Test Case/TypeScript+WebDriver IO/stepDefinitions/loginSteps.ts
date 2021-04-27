import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { LoginPO } from '../pages/loginPO';
import { TaskBoardPO } from '../pages/taskBoardPO';

const login: LoginPO = new LoginPO();
const taskBoard: TaskBoardPO = new TaskBoardPO();

Given(/^user in login page$/, () => {
    browser.url(login.loginUrl());
    login.validatePage();
});

When(/^email field is completed with "(.*?)"$/, (email: string) => {
    login.loginEmailInput().setValue(email);
});

When(/^password field is completed with "(.*?)"$/, (password: string) => {
    login.loginPasswordInput().setValue(password);
});

When(/^press the 'Login' button$/, () => {
    login.loginLoginButtom().click();
});

Then(/^user enters the application$/, () => {
    browser.waitUntil(
        () => browser.getUrl() == taskBoard.taskBoardUrl(),
        {
            timeout: 20000,
            timeoutMsg: 'expected url to be different after 20s'
        });
    expect(browser.getUrl()).to.be.equal(taskBoard.taskBoardUrl())
});