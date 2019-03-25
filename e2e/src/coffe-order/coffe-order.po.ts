import { browser, by, element } from 'protractor';

export class CoffeOrder {
  
  navigateTo() {
    return browser.get('/');
  }

  clickButton(coffeeType) {
    element(by.css('.card-body.' + coffeeType + " button")).click();
  }

  clickRemoveButton(coffeType) {

    element.all(by.css('.card-body h6')).filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text.includes(coffeType);
      });
    }).then(function(elem){
      var parent = elem[0].element(by.xpath('..'));
      parent.element(by.css('button')).click();
    })

  }

  getPriceText(){
    return element(by.css('.price')).getText();
  }

  getBuyButtonStatus(){
    return element(by.id('buy-button')).isEnabled()
  }

  getPageTitleText() {
    return element(by.id('coffe-title')).getText();
  }




  /**
   * 
   * @param string Given string will be returned first character uppercased.
   */
  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
  * 
  * @param string Given string will be returned first character lowercased.
  */
  jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
}