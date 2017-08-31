import React, { Component } from 'react';
import { View, WebView } from 'react-native';

 // your firebase function || file on your server url to redirect the user to the login page
const LOGIN_URL = 'https://......';

class MyComponent extends Component {
    _onNavigationStateChange(webViewState){
    
        // set your filters based on the current url (of the navigation) to keep the user inside auth flow, 
        // or for unwanted urls in reverse way. You can create your filters by using 
        // console.log(webViewState) 
        // and check the touched urls during navigation events take place.
        
        // You can even specify which url's are safe, like forgot password features!
        
        let authFlow = false;
        let condition1 = (webViewState.url.indexOf('some_url_or_its_variable_1') !== -1) : true ? false;
        let condition2 = (webViewState.url.indexOf('some_url_or_its_variable_2') !== -1) : true ? false;
        
        // go on with the previous logic
        if (condition1 || condition2) {
            authFlow = true;
        }
        
        // debugging is good.
        console.log(condition1, condition2, authFlow);
    
        // When the user touches a link on the social media app's login page
        // that could navigate to an unwanted url (ex: clicks on actual social media app's login link on our
        // registered app's login page while the only thing we want is to make them login "over" our app)
        
        if(!authFlow && webViewState.loading) { 
            // learn some new thingies about some underlying thingies. Note that you'll get each log twice as the function
            // is called once for webViewState.loading: true (new url loading has begun and going on) and 
            // webViewState.loading: false (the loading is complete)
            console.log(this.refs["WebView"]);
            console.log(webViewState);
            
            // redirect user back to your initial login url, BEFORE new navigation url is loaded (see how
            // webViewState.loading is being checked for true. if it's false, then it means the page loading is 
            // complete == it's too late!)
            let redirectCode = `window.location = '${LOGIN_URL}';`;
            
            // actual magic happens below. you can access the current WebView instance and some of its functions using the
            // ref prop, like injecting good old js redirect code into the page & run instantly while it's still being loaded
            this.refs["WebView"].injectJavaScript(redirectCode);
        }
    }
    render() {
        return(
            <View>
                <WebView
                    source={{uri: LOGIN_URL }}
                    scalesPageToFit={false}
                    javaScriptEnabled={true}
                    startInLoadingState={false}
                    scrollEnabled={false}
                    onNavigationStateChange={this._onNavigationStateChange.bind(this) }
                    ref="WebView"
                />
            </View>
        );
    }
}

export default MyComponent;
