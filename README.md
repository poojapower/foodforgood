## Team Members
Name - Pooja Rajendra Pawar  
RedId - **824645686**

Name - Tanmay Pravin Deshpande  
RedId - **824646024**

## Description
**Food For Good** is an app built in *react native* which lets you order food from restaurants accross the US. Restaurants can be searched on the basis of their name, city, state code and zip code. You can search the restaurants, go throught their menus, add food items to the cart and order them.

## Flow for Customer :
	1. USer can sign up and sign in using just their id and password
	2. User can update their name on edit profile option
  Existing Users : 
  **username - nativereact.sdsu@gmail.com**  
  **password - Test@12345**
  
  **username: admin@gmail.com**
  **password: 123456**



## Special Instructions
While checking out, on the payment screen you would be asked to add a valid card number. Please enter a valid card or use below details for testing
Card No. 6011111111111117
Expiry Date : 06/25
CVV: 601

You can also try out other credit card numbers from [here](https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm).

## Third party libraries
To get the restaurant info we are consuming following apis
1. [Documenu](https://documenu.com/) - to get restaurant name, phone, address and menu.
2. [Yelp Fusion Api](https://www.yelp.com/developers/documentation/v3) - to get restaurant photos, ratings, review count, price range.

## Credentials for third party apis
You can check these apis with following credentials  
**username - nativereact.sdsu@gmail.com**  
**password - Test@12345**


## Credential for Firebase   
1. [foodforgood](https://console.firebase.google.com/)
**username - nativereact.sdsu@gmail.com**  
**password - Test@12345**



Same credentials can be used to access Gmail,Documenu and Yelp Apis.

## Known issues / Limitations
1. As of now we haven't integrated this with a payment gateway.
2. The Documenu api doesn't provide the functionality of sorting restaurants based on their rating or price. 
3. Since we are using react native version *"^0.63.4"*, the Picker widget is made deprecated. So we tried to implement a dropdown list of US states but were unable to do so. We tried to install it from  [@react-native-picker/picker npm package](https://github.com/react-native-picker/picker)
  We came accross error **"Error: Unable to resolve module 'react-native-web/dist/modules/UnimplementedView' from 'node_modules\@react-native-picker\picker\js\PickerIOS.js: react-native-web/dist/modules/UnimplementedView could not be found within the project."**.
    So while searching the restaurants based on the US state they are situated in, you have to use state code and not the state string.
      e.g. You have to use CA instead of California.  The states code list can be found in [USState.json](assets/USState.json) under assets folder.
4. Since we have opted for free plan for the [Documenu api](https://documenu.com/) we get to fire **500 api requests per account**. So we haven't implemented the pagination functionality for restaurant search. You can check the api consumption count at [Documenu Dashboard](https://documenu.com/dashboard) using the credentials mentioned above.
5. User orders are updated in the database but unable to view it on the screen.Also there is known to be a latency issue with firebase which would be misleading with the data not entered.

## Screens
1. ![1](/assets/Pic_1.jpg)
2. ![2](/assets/Pic_2.jpg)
3. ![3](/assets/Pic_3.jpg)
4. ![4](/assets/Pic_4.jpg)
5. ![4](/assets/Pic_5.jpg)
