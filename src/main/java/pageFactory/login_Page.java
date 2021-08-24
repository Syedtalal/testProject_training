package pageFactory;

import cucumber.api.Scenario;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class login_Page {
        Scenario scn;

        @FindBy(xpath = "//li[@class=\"dropdown\"]/a[@class=\"dropdown-toggle\"]/i")
        WebElement my_Account;

        @FindBy(xpath = "//a[text()='Login']")
        WebElement login_menu;

        @FindBy(xpath = "//input[@id=\"input-email\"]")
        WebElement input_email;

        @FindBy(xpath = "//input[@id=\"input-password\"]")
        WebElement input_password;

        @FindBy(xpath = "//input[@class=\"btn btn-primary\"]")
        WebElement login_btn;

        private WebDriver driver;

        public login_Page(WebDriver driver,Scenario s){
            this.scn = s;
            this.driver=driver;
            PageFactory.initElements(driver,this);
        }
        public void nav_to_login_page(){
            my_Account.click();
            login_menu.click();
        }
        public void email_and_password(String email, String password){
            input_email.sendKeys(email);
            input_password.sendKeys(password);
//            TakesScreenshot scrnshot = (TakesScreenshot)driver;
//            byte[] data = scrnshot.getScreenshotAs(OutputType.BYTES);
//            scn.embed(data, "image/png");
        }
        public void click_on_login_button(){
            login_btn.click();
        }
        public void getTitle(){
            String expected_Title = driver.getTitle();
            String actual_Title = "My Account";
            Assert.assertEquals(expected_Title,actual_Title);

        }

}
