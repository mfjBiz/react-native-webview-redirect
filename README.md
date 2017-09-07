# react-native-webview-redirect
Redirect to url trick in React Native WebView component

WebView is an important component we use while building our apps, commonly used in social media app login screens. There's very little information on how to use WebView prop methods in the official documentation page. This is a trick using onNavigationStateChange prop function of the component and the native ref prop, based on catching the touched links and redirect these events to the desired url before the actual touched link's url is loaded. The idea was born by the need for this kind of redirects because some social media app login pages have different links taking the users out of authentication flow. This will also be useful if you're looking for a way to handle all authentication flow inside your app, without using deep linkings.

In this example, redirects and code handlings to get the auth tokens are handled with a firebase function or a custom api url  you host on your own server. Simply copy the code and change the url variables and you'll get the whole idea.

Happy coding! ^^
