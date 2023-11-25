# HOMEWORK

## You are going to recreate a currency converter program, this time, by getting the input from the user, so essentially, the user is going to be your customer.

1) Create a function called currencyConverter

2) In this function, create a variable called 'customersCurrency', you need to get the value of this variable from the user by using the prompt method. This variable represents the currency the customer currently has.

3) Create a second variable called 'currencyToConvertTo', you need to get the value of this variable from the user by using the prompt method. This variable represents the currency the customer would like in return.

4) Create a third variable called 'amountToExchange', you need to get the value of this variable from the user also by using the prompt method, this variable should be a number and will represent how much money the customer wishes to convert from his current currency.

5) Create variables for all the conversion rates:

1) GBP => USD (rate: 1.25)
2) USD => GBP (rate: 0.8)
3) GBP => EGP (rate: 39)
4) USD => EGP (rate: 31)

6) Using if statements, write the appropriate code for this:

a) If the customer has GBP and would like to convert to USD, print:
```
The customer has exchanged <amount> GBP for <amount> USD
```
b) If the customer has USD and would like to convert to GBP, print:
```
The customer has exchanged <amount> USD for <amount> GBP
```
c) If the customer has GBP and would like to convert to EGP, print:
```
The customer has exchanged <amount> GBP for <amount> EGP
```

d) If the customer has USD and would like to convert to EGP, print:
```
The customer has exchanged <amount> USD for <amount> EGP
```

e) If the customer enters anything else in any of the prompts, print:
```
Sorry, your request is invalid.
```

#### To run the app in the browser, enter the command below into the terminal:

To use the prompt method to extract values from the user, follow the examples below:
```
let myName = prompt("please enter your name");
let myAge = Number(prompt("Please enter your age"));
```

```
npm run dev
```

#### You shall do your homework in the App.tsx file

#### Write comments throughout your code to explain what is going on.

#### If you wish to view everything we went through for recap, you will find the code in the 'NumericalOperators.tsx' file which is in the 'components/Lessons' folder.

### Due date: Tuesday 28/11/23
