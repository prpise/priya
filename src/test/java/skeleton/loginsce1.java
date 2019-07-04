package skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginsce1 {
	WebDriver driver;
@Given("User opens signin page")
public void user_opens_signin_page() {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://10.232.237.143:443/TestMeApp/");
	driver.manage().window().maximize();
	WebElement log=driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/ul/li[1]/a"));
	log.click();
}

@When("User enters un as {string}")
public void user_enters_un_as(String string) {
	driver.findElement(By.name("userName")).sendKeys(string);
    
}

@When("User enters pwd as {string}")
public void user_enters_pwd_as(String string) {
	driver.findElement(By.name("password")).sendKeys(string);


}


@When("User clicks submit button")
public void user_clicks_submit_button() {
	WebElement sub=driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]"));
	sub.click();
	
   
}

@Then("verify login success")
public void verify_login_success() {
	driver.close();
   
	
}



}
