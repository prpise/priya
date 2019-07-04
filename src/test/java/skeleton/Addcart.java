package skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class Addcart {
	WebDriver driver;
	@Given("user opens the sign in page")
	public void user_opens_the_sign_in_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/");
		driver.manage().window().maximize();
		//WebElement log=driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/ul/li[1]/a"));
		//log.click();
	  
	}

	@When("user enter un as {string}")
	public void user_enter_un_as(String string) {
		WebElement log=driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/ul/li[1]/a"));
		log.click();
		driver.findElement(By.name("userName")).sendKeys(string);
		
		
	  
	}

	@When("user enter pwd as {string}")
	public void user_enter_pwd_as(String string) {
		driver.findElement(By.name("password")).sendKeys(string);
		//driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]"));
	  
	}

	@Then("user clicks signin button")
	public void user_clicks_signin_button() {
		driver.findElement(By.xpath("/html/body/main/div/div/div/form/fieldset/div[4]/div/input[1]")).click();
	    
	}

	@Then("user search for the product as {string}")
	public void user_search_for_the_product_as(String string) {

		Actions actions=new Actions(driver);
		WebElement fin=driver.findElement(By.id("myInput"));
		fin.sendKeys("head");
		actions.sendKeys(fin,Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
		
	}

 @When("click purchase button")
public void click_purchase_button() {
	 
 }

   
	@Then("verify purchase success")
	public void verify_purchase_success() {
		String b=driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[1]/center[1]/h4")).getText();
		Assert.assertEquals("Headphone", b);
		driver.close();
	
	}
	
	
   
}

	


