import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { LoginPO } from '../pages/loginPO';
import { TaskBoardPO } from '../pages/taskBoardPO';

const login: LoginPO = new LoginPO();
const taskBoard: TaskBoardPO = new TaskBoardPO();

Given(/^user is in login page$/, () => {
    browser.url(login.loginUrl());
    login.validatePage();
});

When(/^user enters "(.*?)" as email in email field and "(.*?)" as password in password field$/, (email: string, password: string) => {
    login.loginEmailInput().setValue(email);
    login.loginPasswordInput().setValue(password);
});

When(/^user clicks on Login button$/, () => {
    login.loginLoginButtom().click();
});

Then(/^user is logged in to the application$/, () => {
    browser.waitUntil(
        () => browser.getUrl().includes(taskBoard.taskBoardUrl()),
        {
            timeout: 20000,
            timeoutMsg: 'expected url to be different after 20s'
        });
    expect(browser.getUrl().includes(taskBoard.taskBoardUrl()));
});