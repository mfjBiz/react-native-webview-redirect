# react-native-webview-redirect
Redirect to url trick in React Native WebView component

WebView is an important component we use while building our apps, commonly used in social media app login screens. There's very little information on how to use WebView prop methods in the official documentation page. This is a trick using onNavigationStateChange prop function and ref prop of the component, based on catching the touched urls and redirect them to the desired url before they're loaded. The idea was born by the need for this kind of redirects because some social media app login pages have different links taking the users out of authentication flow. This will also be useful if you're looking for a way to handle all authentication flow inside your app, without leaving your app using deep linking.

In this example, redirects and code handlings to get the auth tokens are handled with a firebase function or an api you have in your server. Simply copy the code and change the url variables and you'll get the whole idea.

Happy coding! ^^
