const expectChai = require('chai').expect // we can store it like this

describe('Mindomo', async () => {

    it('Login With Correct Credentials & Try Cases', async () => {
        
        await browser.url("https://www.mindomo.com/login"); //here we chose the site 
        await expect(browser).toHaveTitle('Mindomo - Log in'); // here we check the page title
        await $("#username").setValue("iordache.andreijk@gmail.com"); // here we provide the username
        await browser.pause(1000);
        await $("#password").setValue("mindomo10"); // here we provide the password
        await browser.pause(1000);
        await $(".checkbox-input").click(); // here we hit the "Remember Me" box
        await $("#login").click(); // here we click the "Log in" button
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://www.mindomo.com/dashboard");
        await $$(".map-category-name")[4].click(); // access the "Personal Life" case
        const personalLifeOption = await $$(".map-category-outer")[25]
        await personalLifeOption.scrollIntoView(); // scroll to reach the 25 array member
        await personalLifeOption.moveTo(); // hover the mouse 
        await $$(".map-category-name")[2].click(); // now access the "Quick Diagram" case
        
       
         await browser.pause(5000);
        
    })
    it('Testing The Mindomo Subscription Form', async () => {

        await browser.url("https://www.mindomo.com/"); //here we chose the site 
        await expect(browser).toHaveTitle('Mind mapping, concept mapping, outlining and Gantt Charts'); // here we check the page title
        const pricingOption = await $("=Pricing"); // hit the Pricing Option
        await pricingOption.click();
        await browser.pause(2000);
        await $$(".package-btn-container")[0].click(); // makeing an array and choose the Single user subscription
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://www.mindomo.com/purchase/premium.htm"); // check if we are at the right page
        await $("#accountPeriod1").click(); // switch the subscription period 
        await $("#billingName").setValue("Andrei Iordache"); 
        await $("button[type='button']").click();
        await $(".input-block-level.form-control").setValue("France"); // switching the country to france
        await $("=France").click(); // here we wanna click it 
        await $("#billingCity").setValue("Timisoara"); 
        await $("#billingPhone").setValue("0774496742");
        await browser.pause(2000);
        await $("#purchase").scrollIntoView(); // scroll to reach the Purchase Button
        await browser.pause(2000);
        await $("#purchase").click();
        await browser.pause(3000); 
        await $("#billingCity").getText("This field is mandatory."); // check the error message for City field
        await $("#tearmAndPrivacyErrorMsg").getText("Please agree with the Terms of Use and Privacy Policy."); // check the error message for T & C
       // await browser.pause(6000);
        // boss de boss
        // Asa este !
    })
}) 
