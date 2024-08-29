export function signIn() {
    let oauth2endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2endpoint);

    let params = {
        "client_id": "915725095293-q2p1cjstdk8288fnj58bhfdsuabgj2q5.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5501/profile.html",
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    };

    for (var p in params) {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden'); 
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}
