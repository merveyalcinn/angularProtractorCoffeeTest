import { CoffeOrder } from './coffe-order.po'

describe('coffe-order', () => {

  let coffeOrder;

  beforeEach(() => {
    coffeOrder = new CoffeOrder();
  });


  it('should display page heading as Choose your best coffee ☕', () => {
    coffeOrder.navigateTo();
    expect(coffeOrder.getPageTitleText()).toEqual('Choose your best coffee ☕');
  });

  it('should display Price: 10₺ after adding americano to cart', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('Americano');
    expect(coffeOrder.getPriceText()).toEqual('Price: 10 ₺');
  });

  it('should display Price: 15₺ after adding white to cart', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('White');
    expect(coffeOrder.getPriceText()).toEqual('Price: 15 ₺');
  });

  it('should disable button if user didn\'t select a coffee yet', () => {
    coffeOrder.navigateTo();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false)
  });


  it('should display Price: 40 ₺ for coffe 2 white and 1 americano after adding to cart', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('White');
    coffeOrder.clickButton('White');
    coffeOrder.clickButton('Americano');
    expect(coffeOrder.getPriceText()).toEqual('Price: 40 ₺');
  });

  it('should display Price: 12 ₺ after adding 1 latte to cart', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('Latte');
    expect(coffeOrder.getPriceText()).toEqual('Price: 12 ₺');
  });


  it('should display Price: 25 ₺ after adding  2 white and 1 americano and removing one white', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('White');
    coffeOrder.clickButton('White');
    coffeOrder.clickButton('Americano');
    coffeOrder.clickRemoveButton('White');
    expect(coffeOrder.getPriceText()).toEqual('Price: 25 ₺');
  });

  it('should display Price: 0 ₺ after adding 2 chaitea and 1 americano and removing all items in cart', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Americano');
    coffeOrder.clickRemoveButton('Chaitea');
    coffeOrder.clickRemoveButton('Chaitea');
    coffeOrder.clickRemoveButton('Americano');
    expect(coffeOrder.getPriceText()).toEqual('Price: 0 ₺');
  })

  it('should display disable button after adding 2 white and 1 americano and removing all coffees', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Americano');
    coffeOrder.clickRemoveButton('Chaitea');
    coffeOrder.clickRemoveButton('Chaitea');
    coffeOrder.clickRemoveButton('Americano');
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);

  })

  it(`should display Price: 41 ₺ after adding 1 white, 1 chaitea, 1 americano
   and should disable buy button after clicking buy button and accepting alert`, () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('White');
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Americano');
    coffeOrder.clickBuyButton();
    coffeOrder.acceptAlert();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  })

  it('should display Price: 38 ₺ after adding 1 latte, 1 chaitea, 1 americano', () => {
    coffeOrder.navigateTo();
    coffeOrder.clickButton('Latte');
    coffeOrder.clickButton('Chaitea');
    coffeOrder.clickButton('Americano');
    expect(coffeOrder.getPriceText()).toEqual('Price: 38 ₺');
  })
})